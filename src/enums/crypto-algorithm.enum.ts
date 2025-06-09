export enum ECryptoAlgorithm {
  // 🔁 Symmetric Encryption Algorithms
  AES_128_CBC = 'aes-128-cbc',
  AES_192_CBC = 'aes-192-cbc',
  AES_256_CBC = 'aes-256-cbc',
  AES_128_GCM = 'aes-128-gcm',
  AES_192_GCM = 'aes-192-gcm',
  AES_256_GCM = 'aes-256-gcm',
  DES = 'des',
  TripleDES = 'des-ede3-cbc',
  RC4 = 'rc4',

  // 🔐 Asymmetric Encryption Algorithms
  RSA = 'rsa',
  RSA_OAEP = 'rsa-oaep',
  DSA = 'dsa',
  EC = 'ec', // Elliptic Curve
  ECDSA = 'ecdsa',
  ED25519 = 'ed25519',

  // 🔑 Hash Algorithms (One-way)
  MD5 = 'md5',
  SHA1 = 'sha1',
  SHA256 = 'sha256',
  SHA384 = 'sha384',
  SHA512 = 'sha512',
  BLAKE2B512 = 'blake2b512',
  BLAKE2S256 = 'blake2s256',
  RIPEMD160 = 'ripemd160',

  // 🔒 Key Derivation Functions (KDF)
  PBKDF2 = 'pbkdf2',
  SCRYPT = 'scrypt',
  ARGON2 = 'argon2',

  // 🧪 HMAC (Hashed Message Authentication Code)
  HMAC_SHA256 = 'hmac-sha256',
  HMAC_SHA512 = 'hmac-sha512',
}