import React from 'react';
import Layout from "../components/shared/Layout/Layout";
import { i18n } from '../i18n';
import ContactPageIndex from "../components/pages/Contact";

const Contact = ({t}) => (
    <Layout>
        <ContactPageIndex />
        <div className="container">
            <button
                type='button'
                onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
            />
        </div>
    </Layout>
);

Contact.getInitialProps = async () => ({
    namespacesRequired: ['header', 'common', 'contact']
});

export default Contact
