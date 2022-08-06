import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { _find } from '~/repositories/info';
import globalStyles from '~/assets/styles/globalStyles'
import Header from '~/components/shared/Header'
import GradientContainer from '~/components/shared/GradientContainer';
import DescriptionCard from '~/components/dedicated/Cards/DescriptionCard';
import Button from '~/components/shared/Buttons/Button';
import storage from '~/helpers/storage'
import { styles } from './privacyPolicy';

export default function PrivacyPolicy({ navigation }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser()
    }, [navigation])

    async function getUser() {
        const currentUser = await storage.get('user')
        setUser(currentUser)
    }

    if (user) {
        return (
            <>
                <Header type={'back'} title={'Privacy Policy'} navigation={navigation} />
                <ScrollView>
                    <View style={globalStyles.container}>
                        <Text style={globalStyles.termsText}>
                            This Privacy Policy discloses the privacy practices for My Medical Diary and various related services (together referred to as the "app"). My Med Diaries L.L.C. d.b.a. My Medical Diary, the provider of the app (referred to as "us " or "we"), is committed to protecting your privacy online. Please read the information below to learn the following regarding your use of this app.

                            You acknowledge that this Privacy Policy is part of our App Terms of Use, and by accessing or using our app, you agree to be bound by all of its terms and conditions. If you do not agree to these terms, please do not access or use this app.

                            We reserve the right to change this Privacy Policy at any time. Such changes, modifications, additions or deletions shall be effective immediately upon notice thereof, which may be given by means including, but not limited to issuing an email to the email address listed by registered users and posting the revised Policy on this page. You acknowledge and agree that it is your responsibility to maintain a valid email address as a registered user, review this app and this Policy periodically and to be aware of any modifications. Your continued use of the app after such modifications will constitute your: (a) acknowledgment of the modified Policy; and (b) agreement to abide and be bound by the modified Policy.

                            1.	Types of Information Collected

                            To better provide you with our numerous services, we collect three types of information about our users: Personally Identifiable Information, Non-Personally Identifiable Information, and Personal Health Information. Our primary goal in collecting information from you is to provide you with a smooth, efficient, and customized experience while using our app.

                            Personally Identifiable Information: This refers to information that lets us know the specifics of who you are. When you engage in certain activities on this app, such as purchasing a service, filling out a survey, or sending us feedback, we may ask you to provide certain information about yourself by filling out and submitting an online form. It is completely optional for you to elect to engage in these activities, however, we may ask that you provide us personal information, such as your first and last name, mailing address (including zip code), email address, telephone and facsimile numbers, date of birth, and other personal identifying information. When purchasing services on the app, you may be asked to provide a credit card number. Depending upon the activity, some of the information we ask you to provide is identified as mandatory and some as voluntary. If you do not provide the mandatory data with respect to a particular activity, you will not be able to engage in that activity.

                            Non-Personally Identifiable Information: This refers to information that does not by itself identify a specific individual. We gather certain information about you based upon where you visit on our app in several ways. This information is compiled and analyzed on both a personal and an aggregated basis. This information may include the webapp's Uniform Resource Locator ("URL") that you just came from, which URL you next go to, what browser you are using, and your Internet Protocol ("IP") address. A URL is the global address of documents and other resources on the World Wide web. An IP address is an identifier for a computer or device on a Transmission Control Protocol/Internet Protocol ("TCP/IP") network, such as the World Wide web. Networks like the web use the TCP/IP protocol to route information based on the IP address of the destination. In other words, an IP address is a number that is automatically assigned to your computer whenever you are surfing the web, allowing web servers to locate and identify your computer. Computers require IP addresses in order for users to communicate on the Internet.

                            Personal Health Information: This refers to any information in a medical record or designated record set that can be used to identify an individual and that was created, used, or disclosed in the course of providing a health care service such as diagnosis or treatment.

                            2.	Collection Methods and Use of Information

                            We do not collect any Personally Identifiable Information about you unless you voluntarily provide it to us. You provide certain Personally Identifiable Information to us when you (a) register for our services and register your email address with us; (b) sign up for special offers from selected third parties; (c) send email messages, submit forms, or transmit other information by telephone, text message, or letter; or (d) submit your credit card or other payment information when ordering and purchasing products and services on our app. We may also collect information from you at other points on our app that state that such information is being collected. For example, from users, we may also request information such as your date of birth, address, email address, and phone number to register your account.

                            We will primarily use your Personally Identifiable Information to provide our services to you, as required by our agreements with you. We will also use Personally Identifiable Information to enhance the operation of our app, fill orders, improve our marketing and promotional efforts, statistically analyze app use, improve our product and service offerings, and customize our app's content, layout, and services. We may use Personally Identifiable Information to deliver information to you and to contact you regarding administrative notices. We may also use Personally Identifiable Information to resolve disputes, troubleshoot problems and enforce our agreements with you, including our App Terms of Use, Sales Terms and Conditions, and this Private Policy.

                            We collect the Personal Health Information that you enter into the app. You remain in control of which information is added to the app and how long that information is stored within the app. Your Personal Health Information will be stored in the app for as long as you choose to store the information in the app. You can review, edit, and delete your Personal Health Information data at any time for the purpose of tracking, managing, and having immediate access to your healthcare information.

                            3.	Release of Information

                            My Med Diaries L.L.C. d.b.a. My Medical Diary will treat your Personal Health Information as confidential and will not disclose your Personal Health Information to third parties.

                            We do not sell, trade, or rent your Personally Identifiable Information to others. We do provide some of our services through contractual arrangements with affiliates, services providers, partners and other third parties. We and our service partners use your Personally Identifiable Information to operate our apps and to deliver their services.  For example, we must release your credit card information to the card-issuing bank to confirm payment for products and services purchased on this app and provide order information to third parties that help us provide customer service.

                            We will encourage our service partners to adopt and post privacy policies. However, the use of your Personally Identifiable Information by our service partners is governed by the privacy policies of those service partners and is not subject to our control.

                            Occasionally we may be required by law enforcement or judicial authorities to provide Personally Identifiable Information to the appropriate governmental authorities. We will disclose Personally Identifiable Information upon receipt of a court order, subpoena, or to cooperate with a law enforcement investigation. We fully cooperate with law enforcement agencies in identifying those who use our services for illegal activities. We reserve the right to report to law enforcement agencies any activities that we in good faith believe to be unlawful.

                            4.	Updating and Correcting Information

                            We believe you should have the ability to access and edit the Personally Identifiable Information that you have provided to us. You may change any of your Personally Identifiable Information in your account online at any time by linking to your account in accordance with instructions posted elsewhere on this app. Likewise, you may review, edit, and delete your Personal Health Information data at any time within the App. You may also access and correct your personal information and privacy preferences by writing us at:

                            My Med Diaries L.L.C. d.b.a. My Medical Diary
                            Attn: Customer Service
                            P.O. Box 1652
                            Sugar Land, Texas 77487
                            info@mymeddiaries.com

                            Please include your name, address, and/or email address when you contact us.

                            We encourage you to promptly update your Personally Identifiable Information if it changes.  You may ask to have the information on your account deleted or removed; however, because we keep track of past transactions, you cannot delete information associated with past transactions on this app. In addition, it may be impossible to completely delete your information without some residual information because of backups.

                            5.	User Choices on Collection and Use of Information

                            We may, from time to time, send you email regarding our services. In addition, if you indicated upon registration that you are interested in receiving information from us and our partners, we may occasionally send you direct mail about products and services that we feel may be of interest to you. Only My Med Diaries L.L.C. d.b.a. My Medical Diary (or agents working on behalf of My Med Diaries L.L.C. d.b.a. My Medical Diary and under confidentiality agreements) will send you these direct mailings and only if you indicated that you do not object to these offers. If you do not want to receive such mailings, simply tell us when you give us your personal information. Or, at any time you can easily edit your account information to no longer receive such offers and mailings.

                            You also have choices with respect to cookies, as described below. By modifying your browser preferences, you have the choice to accept all cookies, to be notified when a cookie is set, or to reject all cookies. If you choose to reject all cookies some parts of our app may not work properly in your case.

                            6.	Security of Information

                            On our app you can be assured that your Personally Identifiable Information is secure, consistent with current industry standards. The importance of security for all Personally Identifiable Information associated with our user is of utmost concern to us. Your Personally Identifiable Information is protected in several ways. Access by you to your Personally Identifiable Information is available through a password and unique customer ID selected by you.  This password is encrypted. We recommend that you do not divulge your password to anyone.  In addition, your Personally Identifiable Information resides on a secure server that only selected My Med Diaries L.L.C. d.b.a. My Medical Diary personnel and contractors have access to via password. We encrypt your Personally Identifiable Information and thereby prevent unauthorized parties from viewing such information when it is transmitted to us.

                            Personal information that you provide that is not Personally Identifiable Information also resides on a secure server and is only accessible via password. Since this information is not accessible from outside the app you will not be asked to select a password in order to view or modify such information.

                            In order to most efficiently serve you, credit card transactions and order fulfillment are handled by established third party banking, processing agents and distribution institutions. They receive the information needed to verify and authorize your credit card or other payment information and to process and ship your order.

                            You are solely responsible for the materials that you share, email, transmit, or otherwise make available to us via submission. By making a submission to the app, you understand that the transmission of information will not be protected in accordance with the Health Insurance Portability and Accountability Act of 1996 (“HIPAA”). Once information has been received by us, we will store all health information in your password protected account following HIPAA guidelines. You understand and agree that you must evaluate, and bear all risks associated with your disclosure of any submission and storage of personal information.

                            Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your Personally Identifiable Information and Personal Health Information, you acknowledge that:  (a) there are security and privacy limitations of the Internet which are beyond our control; (b) the security, integrity and privacy of any and all information and data exchanged between you and us through this app cannot be guaranteed; and (c) any such information and data may be viewed or tampered with in transit by a third party.

                            7.	Cookies

                            When you use our app, we will store cookies on your computer in order to facilitate and customize your use of our app. A cookie is a small data text file, which a webapp stores on your computer's hard drive (if your web browser permits) that can later be retrieved to identify you to us. Our cookies store randomly assigned user identification numbers, the country where you are located, and your first name to welcome you back to our app. The cookies make your use of the app easier, make the app run more smoothly and help us to maintain a secure app. You are always free to decline our cookies if your browser permits, but some parts of our app may not work properly in that case.

                            We may use an outside ad serving company to display banner advertisements on our app. As part of their service, they will place a separate cookie on your computer. We will not provide any third-party ad server with any of your Personally Identifiable Information or information about your purchases. We and our third-party ad server will collect and use Non-Personally Identifiable Information about you, such as your IP address, browser type, the server your computer is logged onto, the area code and zip code associated with your server and whether you responded to a particular ad. Other advertisers may also place banner ads on our app in the same manner as above, but we will not disclose any Personally Identifiable Information to them.

                            8.	Privacy Policies of Third-Party Apps

                            Except as otherwise discussed in this Privacy Policy, this document only addresses the use and disclosure of information we collect from you. Other apps accessible through our app have their own privacy policies and data collection, use and disclosure practices. Please consult each app's privacy policy.  We are not responsible for the policies or practices of third parties. Additionally, other companies which may place advertising on our app may collect information about you when you view or click on their advertising through the use of cookies. We cannot control this collection of information. You should contact these advertisers directly if you have any questions about their use of the information that they collect.

                            9.	Your General Data Protection Regulation (“GDPR”) Rights

                            If you are located within the European Union (“EU”), you are entitled to certain rights under the GDPR. You have the right to: (i) Know how long we will keep your information. We will keep your information until the earlier of: (a) your request to delete your information or (b) the company decides it no longer needs the data and the cost of retaining it outweighs the value to keeping it; (ii) Access, rectify or erase your personal information; (iii) Withdraw your consent to the company’s processing of your data, which shall have no effect on the lawfulness of the processing of your personal information prior to your withdrawal; (iv) Lodge a complaint with a supervisory authority that has jurisdiction over GDPR issues; and (v) Provide only your personal information which is reasonably required to enter into a contract with us. We will not ask for your consent to provide unnecessary personal information on the condition of entering into a contractual relationship with the company.

                            10.	California Consumer Privacy Act
                            This PRIVACY NOTICE FOR CALIFORNIA RESIDENTS supplements the information contained in the Privacy Policy and applies solely to visitors, users, and others who reside in the State of California (“consumers” or “you”). We adopt this notice to comply with the California Consumer Privacy Act of 2018 (“CCPA”) and other California privacy laws. Any terms defined in the CCPA have the same meaning when used in this notice.
                            Information We Collect
                            We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device (“personal information”). In particular, we have collected the following categories of personal information from consumers within the last twelve (12) months:
                            Category	Examples	Collected
                            A. Identifiers.	A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, Social Security number, driver's license number, passport number, or other similar identifiers.	YES
                            B. Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)).	A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories.	YES
                            C. Protected classification characteristics under California or federal law.	Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).	YES
                            D. Commercial information.	Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.	NO
                            E. Biometric information.	Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.	YES
                            F. Internet or other similar network activity.	Browsing history, search history, information on a consumer's interaction with a webapp, application, or advertisement.	NO
                            G. Geolocation data.	Physical location or movements.	NO
                            H. Sensory data.	Audio, electronic, visual, thermal, olfactory, or similar information.	NO
                            I. Professional or employment-related information.	Current or past job history or performance evaluations.	NO
                            J. Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).	Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.	NO
                            K. Inferences drawn from other personal information.	Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.	NO
                            Personal information does not include:
                            Publicly available information from government records.
                            De-identified or aggregated consumer information.
                            Information excluded from the CCPA's scope, like:
                            health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data;
                            personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994.
                            We obtain the categories of personal information listed above from the following categories of sources:
                            Directly from our clients or their agents. For example, from documents that our clients provide to us related to the services for which they engage us.
                            Indirectly from our clients or their agents. For example, through information we collect from our clients in the course of providing services to them.
                            Directly and indirectly from activity on our webapp. For example, from submissions through our webapp portal or webapp usage details collected automatically.
                            From third-parties that interact with us in connection with the services we perform. For example, from third party medical suppliers.
                            Use of Personal Information
                            We may use or disclose the personal information we collect for one or more of the following business purposes:
                            To fulfill or meet the reason for which the information is provided. For example, if you provide us with Personal Information related to your personal health, we will use that Personal Information to provide ECG interpretations and general cardiology education.
                            To provide you with information, products or services that you request from us.
                            To provide you with email alerts, event registrations and other notices concerning our products or services, or events or news, that may be of interest to you.
                            To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collections.
                            To improve our webapp and present its contents to you.
                            For testing, research, analysis and product development.
                            As necessary or appropriate to protect the rights, property or safety of us, our clients, or others.
                            To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.
                            As described to you when collecting your personal information or as otherwise set forth in the CCPA.
                            We will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice.
                            Sharing Personal Information
                            We may disclose your personal information to a third party for a business purpose.  When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract.
                            In the preceding twelve (12) months, we have disclosed the following categories of personal information for a business purpose:
                            Category A:             Identifiers.
                            Category B:             California Customer Records personal information categories.
                            Category C:             Protected classification characteristics under California or federal law.
                            Category I:              Professional or employment-related information.
                            We disclose your personal information for a business purpose to the following categories of third parties:
                            Our affiliates.
                            Service providers.
                            Third parties to whom you or your agents authorize us to disclose your personal information in connection with products or services we provide to you.
                            In the preceding twelve (12) months, we have not sold any personal information.
                            Your Rights and Choices
                            The CCPA provides consumers (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.
                            Access to Specific Information and Data Portability Rights
                            You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:
                            The categories of personal information we collected about you.
                            The categories of sources for the personal information we collected about you.
                            Our business or commercial purpose for collecting or selling that personal information.
                            The categories of third parties with whom we share that personal information.
                            The specific pieces of personal information we collected about you (also called a data portability request).
                            If we sold or disclosed your personal information for a business purpose, two separate lists disclosing:
                            sales, identifying the personal information categories that each category of recipient purchased; and
                            disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained.
                            Deletion Request Rights
                            You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.
                            We may deny your deletion request if retaining the information is necessary for us or our service providers to:
                            Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.
                            Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.
                            Debug products to identify and repair errors that impair existing intended functionality.
                            Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.
                            Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 seq.).
                            Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely render impossible or seriously impair the research's achievement, if you previously provided informed consent.
                            Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.
                            Comply with a legal obligation.
                            Make other internal and lawful uses of that information that are compatible with the context in which you provided it.
                            Exercising Access, Data Portability, and Deletion Rights
                            To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to myecgmd@gmail.com. Only you or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.
                            You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:
                            Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.
                            Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.
                            We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you.  Making a verifiable consumer request does not require you to create an account with us.  We will only use personal information provided in a verifiable consumer request to verify the requestor's identity or authority to make the request.
                            Response Timing and Format
                            We endeavor to respond to a verifiable consumer request within 45 days of its receipt.  If we require more time (up to 90 days), we will inform you of the reason and extension period in writing.  If you have an account with us, we will deliver our written response to that account.  If you do not have an account with us, we will deliver our written response by mail or electronically, at your option.  Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request's receipt.  The response we provide will also explain the reasons we cannot comply with a request, if applicable.  For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.
                            We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded.  If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.
                            Non-Discrimination
                            We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:
                            Deny you goods or services.
                            Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.
                            Provide you a different level or quality of goods or services.
                            Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.
                            Changes to Our Privacy Notice
                            We reserve the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will notify you by email or through a notice on our webapp homepage.
                            Contact Information
                            If you have any questions or comments about this notice, our Privacy Statement, the ways in which we collect and use your personal information, your choices, and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:
                            My Med Diaries L.L.C. d.b.a. My Medical Diary
                            Attn: Customer Service
                            P.O. Box 1652
                            Sugar Land, Texas 77487

                            11.	Miscellaneous Privacy Issues

                            You must be at least 18 years old to have our permission to use this app. Our App is not directed to children. We do not sell products or services for purchase by children. Our policy is that we do not knowingly collect, use, or disclose Personally Identifiable Information about visitors that are under 18 years of age. If you are a parent or guardian of a child under the age of 18 and believe he or she has disclosed personally identifiable information to us, please contact us at info@mymeddiaries.com. A parent or guardian of a child under the age of 18 may review and request deletion of such child’s personally identifiable information as well as prohibit the use of that information

                            If you have any questions about this Privacy Policy, the practices of this app, or your dealings with this app, please contact us by sending a letter to:

                            My Med Diaries L.L.C. d.b.a. My Medical Diary
                            Attn: Customer Service
                            P.O. Box 1652
                            Sugar Land, Texas 77487

                            You may also contact us by email at info@mymeddiaries.com.
                        </Text>
                    </View>
                </ScrollView>
            </>
        )
    }
    else {
        return (
            <GradientContainer topContainer={true}>
                <DescriptionCard title={'Privacy Policy'}>
                    This Privacy Policy discloses the privacy practices for My Medical Diary and various related services (together referred to as the "app"). My Med Diaries L.L.C. d.b.a. My Medical Diary, the provider of the app (referred to as "us " or "we"), is committed to protecting your privacy online. Please read the information below to learn the following regarding your use of this app.

                    You acknowledge that this Privacy Policy is part of our App Terms of Use, and by accessing or using our app, you agree to be bound by all of its terms and conditions. If you do not agree to these terms, please do not access or use this app.

                    We reserve the right to change this Privacy Policy at any time. Such changes, modifications, additions or deletions shall be effective immediately upon notice thereof, which may be given by means including, but not limited to issuing an email to the email address listed by registered users and posting the revised Policy on this page. You acknowledge and agree that it is your responsibility to maintain a valid email address as a registered user, review this app and this Policy periodically and to be aware of any modifications. Your continued use of the app after such modifications will constitute your: (a) acknowledgment of the modified Policy; and (b) agreement to abide and be bound by the modified Policy.

                    1.	Types of Information Collected

                    To better provide you with our numerous services, we collect three types of information about our users: Personally Identifiable Information, Non-Personally Identifiable Information, and Personal Health Information. Our primary goal in collecting information from you is to provide you with a smooth, efficient, and customized experience while using our app.

                    Personally Identifiable Information: This refers to information that lets us know the specifics of who you are. When you engage in certain activities on this app, such as purchasing a service, filling out a survey, or sending us feedback, we may ask you to provide certain information about yourself by filling out and submitting an online form. It is completely optional for you to elect to engage in these activities, however, we may ask that you provide us personal information, such as your first and last name, mailing address (including zip code), email address, telephone and facsimile numbers, date of birth, and other personal identifying information. When purchasing services on the app, you may be asked to provide a credit card number. Depending upon the activity, some of the information we ask you to provide is identified as mandatory and some as voluntary. If you do not provide the mandatory data with respect to a particular activity, you will not be able to engage in that activity.

                    Non-Personally Identifiable Information: This refers to information that does not by itself identify a specific individual. We gather certain information about you based upon where you visit on our app in several ways. This information is compiled and analyzed on both a personal and an aggregated basis. This information may include the webapp's Uniform Resource Locator ("URL") that you just came from, which URL you next go to, what browser you are using, and your Internet Protocol ("IP") address. A URL is the global address of documents and other resources on the World Wide web. An IP address is an identifier for a computer or device on a Transmission Control Protocol/Internet Protocol ("TCP/IP") network, such as the World Wide web. Networks like the web use the TCP/IP protocol to route information based on the IP address of the destination. In other words, an IP address is a number that is automatically assigned to your computer whenever you are surfing the web, allowing web servers to locate and identify your computer. Computers require IP addresses in order for users to communicate on the Internet.

                    Personal Health Information: This refers to any information in a medical record or designated record set that can be used to identify an individual and that was created, used, or disclosed in the course of providing a health care service such as diagnosis or treatment.

                    2.	Collection Methods and Use of Information

                    We do not collect any Personally Identifiable Information about you unless you voluntarily provide it to us. You provide certain Personally Identifiable Information to us when you (a) register for our services and register your email address with us; (b) sign up for special offers from selected third parties; (c) send email messages, submit forms, or transmit other information by telephone, text message, or letter; or (d) submit your credit card or other payment information when ordering and purchasing products and services on our app. We may also collect information from you at other points on our app that state that such information is being collected. For example, from users, we may also request information such as your date of birth, address, email address, and phone number to register your account.

                    We will primarily use your Personally Identifiable Information to provide our services to you, as required by our agreements with you. We will also use Personally Identifiable Information to enhance the operation of our app, fill orders, improve our marketing and promotional efforts, statistically analyze app use, improve our product and service offerings, and customize our app's content, layout, and services. We may use Personally Identifiable Information to deliver information to you and to contact you regarding administrative notices. We may also use Personally Identifiable Information to resolve disputes, troubleshoot problems and enforce our agreements with you, including our App Terms of Use, Sales Terms and Conditions, and this Private Policy.

                    We collect the Personal Health Information that you enter into the app. You remain in control of which information is added to the app and how long that information is stored within the app. Your Personal Health Information will be stored in the app for as long as you choose to store the information in the app. You can review, edit, and delete your Personal Health Information data at any time for the purpose of tracking, managing, and having immediate access to your healthcare information.

                    3.	Release of Information

                    My Med Diaries L.L.C. d.b.a. My Medical Diary will treat your Personal Health Information as confidential and will not disclose your Personal Health Information to third parties.

                    We do not sell, trade, or rent your Personally Identifiable Information to others. We do provide some of our services through contractual arrangements with affiliates, services providers, partners and other third parties. We and our service partners use your Personally Identifiable Information to operate our apps and to deliver their services.  For example, we must release your credit card information to the card-issuing bank to confirm payment for products and services purchased on this app and provide order information to third parties that help us provide customer service.

                    We will encourage our service partners to adopt and post privacy policies. However, the use of your Personally Identifiable Information by our service partners is governed by the privacy policies of those service partners and is not subject to our control.

                    Occasionally we may be required by law enforcement or judicial authorities to provide Personally Identifiable Information to the appropriate governmental authorities. We will disclose Personally Identifiable Information upon receipt of a court order, subpoena, or to cooperate with a law enforcement investigation. We fully cooperate with law enforcement agencies in identifying those who use our services for illegal activities. We reserve the right to report to law enforcement agencies any activities that we in good faith believe to be unlawful.

                    4.	Updating and Correcting Information

                    We believe you should have the ability to access and edit the Personally Identifiable Information that you have provided to us. You may change any of your Personally Identifiable Information in your account online at any time by linking to your account in accordance with instructions posted elsewhere on this app. Likewise, you may review, edit, and delete your Personal Health Information data at any time within the App. You may also access and correct your personal information and privacy preferences by writing us at:

                    My Med Diaries L.L.C. d.b.a. My Medical Diary
                    Attn: Customer Service
                    P.O. Box 1652
                    Sugar Land, Texas 77487
                    info@mymeddiaries.com

                    Please include your name, address, and/or email address when you contact us.

                    We encourage you to promptly update your Personally Identifiable Information if it changes.  You may ask to have the information on your account deleted or removed; however, because we keep track of past transactions, you cannot delete information associated with past transactions on this app. In addition, it may be impossible to completely delete your information without some residual information because of backups.

                    5.	User Choices on Collection and Use of Information

                    We may, from time to time, send you email regarding our services. In addition, if you indicated upon registration that you are interested in receiving information from us and our partners, we may occasionally send you direct mail about products and services that we feel may be of interest to you. Only My Med Diaries L.L.C. d.b.a. My Medical Diary (or agents working on behalf of My Med Diaries L.L.C. d.b.a. My Medical Diary and under confidentiality agreements) will send you these direct mailings and only if you indicated that you do not object to these offers. If you do not want to receive such mailings, simply tell us when you give us your personal information. Or, at any time you can easily edit your account information to no longer receive such offers and mailings.

                    You also have choices with respect to cookies, as described below. By modifying your browser preferences, you have the choice to accept all cookies, to be notified when a cookie is set, or to reject all cookies. If you choose to reject all cookies some parts of our app may not work properly in your case.

                    6.	Security of Information

                    On our app you can be assured that your Personally Identifiable Information is secure, consistent with current industry standards. The importance of security for all Personally Identifiable Information associated with our user is of utmost concern to us. Your Personally Identifiable Information is protected in several ways. Access by you to your Personally Identifiable Information is available through a password and unique customer ID selected by you.  This password is encrypted. We recommend that you do not divulge your password to anyone.  In addition, your Personally Identifiable Information resides on a secure server that only selected My Med Diaries L.L.C. d.b.a. My Medical Diary personnel and contractors have access to via password. We encrypt your Personally Identifiable Information and thereby prevent unauthorized parties from viewing such information when it is transmitted to us.

                    Personal information that you provide that is not Personally Identifiable Information also resides on a secure server and is only accessible via password. Since this information is not accessible from outside the app you will not be asked to select a password in order to view or modify such information.

                    In order to most efficiently serve you, credit card transactions and order fulfillment are handled by established third party banking, processing agents and distribution institutions. They receive the information needed to verify and authorize your credit card or other payment information and to process and ship your order.

                    You are solely responsible for the materials that you share, email, transmit, or otherwise make available to us via submission. By making a submission to the app, you understand that the transmission of information will not be protected in accordance with the Health Insurance Portability and Accountability Act of 1996 (“HIPAA”). Once information has been received by us, we will store all health information in your password protected account following HIPAA guidelines. You understand and agree that you must evaluate, and bear all risks associated with your disclosure of any submission and storage of personal information.

                    Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your Personally Identifiable Information and Personal Health Information, you acknowledge that:  (a) there are security and privacy limitations of the Internet which are beyond our control; (b) the security, integrity and privacy of any and all information and data exchanged between you and us through this app cannot be guaranteed; and (c) any such information and data may be viewed or tampered with in transit by a third party.

                    7.	Cookies

                    When you use our app, we will store cookies on your computer in order to facilitate and customize your use of our app. A cookie is a small data text file, which a webapp stores on your computer's hard drive (if your web browser permits) that can later be retrieved to identify you to us. Our cookies store randomly assigned user identification numbers, the country where you are located, and your first name to welcome you back to our app. The cookies make your use of the app easier, make the app run more smoothly and help us to maintain a secure app. You are always free to decline our cookies if your browser permits, but some parts of our app may not work properly in that case.

                    We may use an outside ad serving company to display banner advertisements on our app. As part of their service, they will place a separate cookie on your computer. We will not provide any third-party ad server with any of your Personally Identifiable Information or information about your purchases. We and our third-party ad server will collect and use Non-Personally Identifiable Information about you, such as your IP address, browser type, the server your computer is logged onto, the area code and zip code associated with your server and whether you responded to a particular ad. Other advertisers may also place banner ads on our app in the same manner as above, but we will not disclose any Personally Identifiable Information to them.

                    8.	Privacy Policies of Third-Party Apps

                    Except as otherwise discussed in this Privacy Policy, this document only addresses the use and disclosure of information we collect from you. Other apps accessible through our app have their own privacy policies and data collection, use and disclosure practices. Please consult each app's privacy policy.  We are not responsible for the policies or practices of third parties. Additionally, other companies which may place advertising on our app may collect information about you when you view or click on their advertising through the use of cookies. We cannot control this collection of information. You should contact these advertisers directly if you have any questions about their use of the information that they collect.

                    9.	Your General Data Protection Regulation (“GDPR”) Rights

                    If you are located within the European Union (“EU”), you are entitled to certain rights under the GDPR. You have the right to: (i) Know how long we will keep your information. We will keep your information until the earlier of: (a) your request to delete your information or (b) the company decides it no longer needs the data and the cost of retaining it outweighs the value to keeping it; (ii) Access, rectify or erase your personal information; (iii) Withdraw your consent to the company’s processing of your data, which shall have no effect on the lawfulness of the processing of your personal information prior to your withdrawal; (iv) Lodge a complaint with a supervisory authority that has jurisdiction over GDPR issues; and (v) Provide only your personal information which is reasonably required to enter into a contract with us. We will not ask for your consent to provide unnecessary personal information on the condition of entering into a contractual relationship with the company.

                    10.	California Consumer Privacy Act
                    This PRIVACY NOTICE FOR CALIFORNIA RESIDENTS supplements the information contained in the Privacy Policy and applies solely to visitors, users, and others who reside in the State of California (“consumers” or “you”). We adopt this notice to comply with the California Consumer Privacy Act of 2018 (“CCPA”) and other California privacy laws. Any terms defined in the CCPA have the same meaning when used in this notice.
                    Information We Collect
                    We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device (“personal information”). In particular, we have collected the following categories of personal information from consumers within the last twelve (12) months:
                    Category	Examples	Collected
                    A. Identifiers.	A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, Social Security number, driver's license number, passport number, or other similar identifiers.	YES
                    B. Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)).	A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories.	YES
                    C. Protected classification characteristics under California or federal law.	Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).	YES
                    D. Commercial information.	Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.	NO
                    E. Biometric information.	Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.	YES
                    F. Internet or other similar network activity.	Browsing history, search history, information on a consumer's interaction with a webapp, application, or advertisement.	NO
                    G. Geolocation data.	Physical location or movements.	NO
                    H. Sensory data.	Audio, electronic, visual, thermal, olfactory, or similar information.	NO
                    I. Professional or employment-related information.	Current or past job history or performance evaluations.	NO
                    J. Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).	Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.	NO
                    K. Inferences drawn from other personal information.	Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.	NO
                    Personal information does not include:
                    Publicly available information from government records.
                    De-identified or aggregated consumer information.
                    Information excluded from the CCPA's scope, like:
                    health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data;
                    personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994.
                    We obtain the categories of personal information listed above from the following categories of sources:
                    Directly from our clients or their agents. For example, from documents that our clients provide to us related to the services for which they engage us.
                    Indirectly from our clients or their agents. For example, through information we collect from our clients in the course of providing services to them.
                    Directly and indirectly from activity on our webapp. For example, from submissions through our webapp portal or webapp usage details collected automatically.
                    From third-parties that interact with us in connection with the services we perform. For example, from third party medical suppliers.
                    Use of Personal Information
                    We may use or disclose the personal information we collect for one or more of the following business purposes:
                    To fulfill or meet the reason for which the information is provided. For example, if you provide us with Personal Information related to your personal health, we will use that Personal Information to provide ECG interpretations and general cardiology education.
                    To provide you with information, products or services that you request from us.
                    To provide you with email alerts, event registrations and other notices concerning our products or services, or events or news, that may be of interest to you.
                    To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collections.
                    To improve our webapp and present its contents to you.
                    For testing, research, analysis and product development.
                    As necessary or appropriate to protect the rights, property or safety of us, our clients, or others.
                    To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.
                    As described to you when collecting your personal information or as otherwise set forth in the CCPA.
                    We will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice.
                    Sharing Personal Information
                    We may disclose your personal information to a third party for a business purpose.  When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract.
                    In the preceding twelve (12) months, we have disclosed the following categories of personal information for a business purpose:
                    Category A:             Identifiers.
                    Category B:             California Customer Records personal information categories.
                    Category C:             Protected classification characteristics under California or federal law.
                    Category I:              Professional or employment-related information.
                    We disclose your personal information for a business purpose to the following categories of third parties:
                    Our affiliates.
                    Service providers.
                    Third parties to whom you or your agents authorize us to disclose your personal information in connection with products or services we provide to you.
                    In the preceding twelve (12) months, we have not sold any personal information.
                    Your Rights and Choices
                    The CCPA provides consumers (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.
                    Access to Specific Information and Data Portability Rights
                    You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:
                    The categories of personal information we collected about you.
                    The categories of sources for the personal information we collected about you.
                    Our business or commercial purpose for collecting or selling that personal information.
                    The categories of third parties with whom we share that personal information.
                    The specific pieces of personal information we collected about you (also called a data portability request).
                    If we sold or disclosed your personal information for a business purpose, two separate lists disclosing:
                    sales, identifying the personal information categories that each category of recipient purchased; and
                    disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained.
                    Deletion Request Rights
                    You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.
                    We may deny your deletion request if retaining the information is necessary for us or our service providers to:
                    Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.
                    Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.
                    Debug products to identify and repair errors that impair existing intended functionality.
                    Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.
                    Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 seq.).
                    Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely render impossible or seriously impair the research's achievement, if you previously provided informed consent.
                    Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.
                    Comply with a legal obligation.
                    Make other internal and lawful uses of that information that are compatible with the context in which you provided it.
                    Exercising Access, Data Portability, and Deletion Rights
                    To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to myecgmd@gmail.com. Only you or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.
                    You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:
                    Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.
                    Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.
                    We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you.  Making a verifiable consumer request does not require you to create an account with us.  We will only use personal information provided in a verifiable consumer request to verify the requestor's identity or authority to make the request.
                    Response Timing and Format
                    We endeavor to respond to a verifiable consumer request within 45 days of its receipt.  If we require more time (up to 90 days), we will inform you of the reason and extension period in writing.  If you have an account with us, we will deliver our written response to that account.  If you do not have an account with us, we will deliver our written response by mail or electronically, at your option.  Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request's receipt.  The response we provide will also explain the reasons we cannot comply with a request, if applicable.  For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.
                    We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded.  If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.
                    Non-Discrimination
                    We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:
                    Deny you goods or services.
                    Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.
                    Provide you a different level or quality of goods or services.
                    Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.
                    Changes to Our Privacy Notice
                    We reserve the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will notify you by email or through a notice on our webapp homepage.
                    Contact Information
                    If you have any questions or comments about this notice, our Privacy Statement, the ways in which we collect and use your personal information, your choices, and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:
                    My Med Diaries L.L.C. d.b.a. My Medical Diary
                    Attn: Customer Service
                    P.O. Box 1652
                    Sugar Land, Texas 77487

                    11.	Miscellaneous Privacy Issues

                    You must be at least 18 years old to have our permission to use this app. Our App is not directed to children. We do not sell products or services for purchase by children. Our policy is that we do not knowingly collect, use, or disclose Personally Identifiable Information about visitors that are under 18 years of age. If you are a parent or guardian of a child under the age of 18 and believe he or she has disclosed personally identifiable information to us, please contact us at info@mymeddiaries.com. A parent or guardian of a child under the age of 18 may review and request deletion of such child’s personally identifiable information as well as prohibit the use of that information

                    If you have any questions about this Privacy Policy, the practices of this app, or your dealings with this app, please contact us by sending a letter to:

                    My Med Diaries L.L.C. d.b.a. My Medical Diary
                    Attn: Customer Service
                    P.O. Box 1652
                    Sugar Land, Texas 77487

                    You may also contact us by email at info@mymeddiaries.com.
                </DescriptionCard>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Button
                        title="Agree"
                        style={{ ...globalStyles.baseButton, ...styles.button }}
                        textStyle={{ ...globalStyles.baseButtonText, ...styles.buttonText }}
                    />
                </TouchableOpacity>
            </GradientContainer>
        )
    }
}

