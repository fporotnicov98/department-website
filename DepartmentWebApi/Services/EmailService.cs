using Google.Apis.Auth.OAuth2;
using Google.Apis.Auth.OAuth2.Flows;
using Google.Apis.Util;
using Google.Apis.Util.Store;
using MailKit.Net.Imap;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DepartmentWebApi.Services
{
    public class EmailService
    {
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();

        public void SendEmailAsync(string email, string subject, string message)
        {
            try
            {
                var mimeMessage = new MimeMessage();
                var bodyBuilder = new BodyBuilder();

                // from
                mimeMessage.From.Add(new MailboxAddress("Кафедра ИБ", "kafsend@gmail.com"));
                // to
                mimeMessage.To.Add(new MailboxAddress("", email));

                mimeMessage.Subject = subject;
                bodyBuilder.HtmlBody = message;
                mimeMessage.Body = bodyBuilder.ToMessageBody();

                using (SmtpClient client = new SmtpClient())
                {

                    client.ServerCertificateValidationCallback = (s, c, h, e) => true;
                    client.Connect("smtp.gmail.com", 465, SecureSocketOptions.SslOnConnect);
                    client.Authenticate("kafsend@gmail.com", "&12BqC50");
                    client.Send(mimeMessage);
                    client.Disconnect(true);
                }
            }
            catch(Exception ex)
            {
                logger.Error(ex);
            }

        }
        
    }
    
}
