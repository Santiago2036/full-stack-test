using System.Security.Cryptography;
using System.Text;

namespace BackUserTest.Controllers.utils
{
    public class encDepService
    {
        public string Encryption(string data, string key)
        {
            byte[] keyArray;
            byte[] Encription = Encoding.UTF8.GetBytes(data);

            keyArray = Encoding.UTF8.GetBytes(key);

            var tdes = new TripleDESCryptoServiceProvider();
            tdes.Key = keyArray;
            tdes.Mode = CipherMode.ECB;
            tdes.Padding = PaddingMode.PKCS7;

            ICryptoTransform cTransform = tdes.CreateEncryptor();
            byte[] result = cTransform.TransformFinalBlock(Encription, 0, Encription.Length);
            tdes.Clear();

            return Convert.ToBase64String(result, 0, result.Length);
        }
        public string Decryption(string data, string key)
        {
            byte[] keyArray;
            byte[] Decryption = Convert.FromBase64String(data);

            keyArray = Encoding.UTF8.GetBytes(key);

            var tdes = new TripleDESCryptoServiceProvider();
            tdes.Key = keyArray;
            tdes.Mode = CipherMode.ECB;
            tdes.Padding = PaddingMode.PKCS7;

            ICryptoTransform cTransform = tdes.CreateDecryptor();
            byte[] result = cTransform.TransformFinalBlock(Decryption, 0, Decryption.Length);
            tdes.Clear();

            return Encoding.UTF8.GetString(result);
        }

    }
}
