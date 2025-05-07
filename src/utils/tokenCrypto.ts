import CryptoJS from 'crypto-js';

export const tokenCrypto = {
  encrypt: (token: string): string => {
    return CryptoJS.AES.encrypt(
      token,
      import.meta.env.VITE_TOKEN_CRYPTO_SECRET_KEY
    ).toString();
  },

  decrypt: (encryptedToken: string): string => {
    const bytes = CryptoJS.AES.decrypt(
      encryptedToken,
      import.meta.env.VITE_TOKEN_CRYPTO_SECRET_KEY
    );
    return bytes.toString(CryptoJS.enc.Utf8);
  },
};
