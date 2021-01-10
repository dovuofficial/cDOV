// https://github.com/albertocuestacanada/ERC20Permit/blob/master/utils/signatures.ts
import {
  keccak256,
  defaultAbiCoder,
  toUtf8Bytes,
  solidityPack,
} from 'ethers/lib/utils'
import { ecsign } from 'ethereumjs-util'
import { BigNumberish } from 'ethers'

export const sign = (digest: any, privateKey: any) => {
  return ecsign(
    Buffer.from(digest.slice(2), 'hex'),
    Buffer.from(privateKey.slice(2), 'hex'),
  )
}

export const PERMIT_TYPEHASH = keccak256(
  toUtf8Bytes(
    'Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)',
  ),
)

export const EIP712_DOMAIN_TYPEHASH = keccak256(
  toUtf8Bytes(
    'EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)',
  ),
)

// Returns the EIP712 hash which should be signed by the user
// in order to make a call to `permit`
export function getPermitDigest(
  versionNumber: string,
  name: string,
  address: string,
  chainId: number,
  owner: string,
  spender: string,
  value: number,
  nonce: number,
  deadline: BigNumberish,
) {
  const DOMAIN_SEPARATOR = getDomainSeparator(
    versionNumber,
    name,
    address,
    chainId,
  )
  const permitHash = keccak256(
    defaultAbiCoder.encode(
      ['bytes32', 'address', 'address', 'uint256', 'uint256', 'uint256'],
      [PERMIT_TYPEHASH, owner, spender, value, nonce, deadline],
    ),
  )
  const hash = keccak256(
    solidityPack(
      ['bytes1', 'bytes1', 'bytes32', 'bytes32'],
      ['0x19', '0x01', DOMAIN_SEPARATOR, permitHash],
    ),
  )
  return hash
}

// Gets the EIP712 domain separator
export function getDomainSeparator(
  versionNumber: string,
  name: string,
  contractAddress: string,
  chainId: number,
) {
  return keccak256(
    defaultAbiCoder.encode(
      ['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'],
      [
        EIP712_DOMAIN_TYPEHASH,
        keccak256(toUtf8Bytes(name)),
        keccak256(toUtf8Bytes(versionNumber)),
        chainId,
        contractAddress,
      ],
    ),
  )
}
