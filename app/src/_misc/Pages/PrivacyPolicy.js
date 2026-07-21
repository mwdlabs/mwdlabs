import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  const { language } = useTranslation();
  const isFr = language === 'fr';

  return (
    <div className="privacy-container">
      <div className="page-header">
        <h1>{isFr ? 'Politique de Confidentialité' : 'Privacy Policy'}</h1>
        <p>{isFr ? 'Dernière mise à jour : mars 2026' : 'Last updated: March 2026'}</p>
      </div>

      <div className="privacy-content">

        <section className="privacy-section">
          <h2>{isFr ? '1. Qui sommes-nous' : '1. Who We Are'}</h2>
          <p>
            {isFr
              ? "MWD Labs est une agence web basée à Montréal, Canada. Nous concevons et développons des sites web professionnels pour les entreprises. Pour toute question relative à cette politique, vous pouvez nous contacter à :"
              : "MWD Labs is a web agency based in Montreal, Canada. We design and develop professional websites for businesses. For any questions regarding this policy, you can contact us at:"}
          </p>
          <ul>
            <li>Email : dioufmouhammad@gmail.com</li>
            <li>{isFr ? 'Téléphone' : 'Phone'} : +1 514-690-6138</li>
            <li>{isFr ? 'Site web' : 'Website'} : mwdlabs.ca</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>{isFr ? '2. Données collectées' : '2. Data We Collect'}</h2>
          <p>
            {isFr
              ? "Nous collectons uniquement les données que vous nous fournissez volontairement via notre formulaire de contact et notre formulaire d'abonnement à la newsletter :"
              : "We only collect data you voluntarily provide through our contact form and newsletter subscription form:"}
          </p>
          <ul>
            <li>{isFr ? 'Votre nom' : 'Your name'}</li>
            <li>{isFr ? 'Votre adresse email' : 'Your email address'}</li>
            <li>{isFr ? 'Le sujet et le contenu de votre message' : 'The subject and content of your message'}</li>
          </ul>
          <p>
            {isFr
              ? "Nous ne collectons aucune donnée automatiquement (cookies de tracking, analytics, etc.) à ce stade."
              : "We do not automatically collect any data (tracking cookies, analytics, etc.) at this stage."}
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isFr ? '3. Utilisation des données' : '3. How We Use Your Data'}</h2>
          <p>{isFr ? 'Les données collectées sont utilisées uniquement pour :' : 'Collected data is used only to:'}</p>
          <ul>
            <li>{isFr ? 'Répondre à votre demande ou question' : 'Respond to your request or question'}</li>
            <li>{isFr ? 'Vous envoyer la newsletter si vous y avez souscrit' : 'Send you the newsletter if you subscribed'}</li>
            <li>{isFr ? 'Vous contacter concernant un projet potentiel' : 'Contact you about a potential project'}</li>
          </ul>
          <p>
            {isFr
              ? "Nous n'utilisons jamais vos données à des fins publicitaires ni ne les vendons à des tiers."
              : "We never use your data for advertising purposes or sell it to third parties."}
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isFr ? '4. Partage des données' : '4. Data Sharing'}</h2>
          <p>
            {isFr
              ? "Vos données ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales. Nous utilisons EmailJS pour acheminer les messages de notre formulaire de contact — ce service reçoit votre email et votre message uniquement pour les transmettre."
              : "Your data is never sold, rented, or shared with third parties for commercial purposes. We use EmailJS to route messages from our contact form — this service receives your email and message solely to transmit them."}
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isFr ? '5. Conservation des données' : '5. Data Retention'}</h2>
          <p>
            {isFr
              ? "Nous conservons vos messages uniquement le temps nécessaire pour traiter votre demande. Si aucune relation commerciale ne s'établit, vos données sont supprimées dans un délai de 12 mois."
              : "We retain your messages only as long as necessary to handle your request. If no business relationship is established, your data is deleted within 12 months."}
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isFr ? '6. Vos droits' : '6. Your Rights'}</h2>
          <p>
            {isFr
              ? "Conformément à la Loi 25 (Québec) et au RGPD, vous avez le droit de :"
              : "In accordance with Law 25 (Quebec) and GDPR, you have the right to:"}
          </p>
          <ul>
            <li>{isFr ? 'Accéder à vos données personnelles' : 'Access your personal data'}</li>
            <li>{isFr ? 'Corriger des données inexactes' : 'Correct inaccurate data'}</li>
            <li>{isFr ? 'Demander la suppression de vos données' : 'Request deletion of your data'}</li>
            <li>{isFr ? 'Retirer votre consentement à tout moment' : 'Withdraw your consent at any time'}</li>
          </ul>
          <p>
            {isFr
              ? "Pour exercer ces droits, contactez-nous à dioufmouhammad@gmail.com."
              : "To exercise these rights, contact us at dioufmouhammad@gmail.com."}
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isFr ? '7. Sécurité' : '7. Security'}</h2>
          <p>
            {isFr
              ? "Nous prenons des mesures raisonnables pour protéger vos données. Notre site est servi via HTTPS. Aucune donnée sensible (carte de crédit, mots de passe) n'est collectée sur ce site."
              : "We take reasonable measures to protect your data. Our site is served over HTTPS. No sensitive data (credit cards, passwords) is collected on this site."}
          </p>
        </section>

        <section className="privacy-section">
          <h2>{isFr ? '8. Modifications' : '8. Changes to This Policy'}</h2>
          <p>
            {isFr
              ? "Nous pouvons mettre à jour cette politique à tout moment. La date de dernière mise à jour sera toujours indiquée en haut de cette page."
              : "We may update this policy at any time. The last updated date will always be shown at the top of this page."}
          </p>
        </section>

      </div>
    </div>
  );
}

export default PrivacyPolicy;
