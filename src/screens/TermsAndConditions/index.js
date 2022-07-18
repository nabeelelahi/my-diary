import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import Header from '~/components/shared/Header'
import { _find } from '~/repositories/info';
import globalStyles from '~/assets/styles/globalStyles'

export default function TermsAndConditions({ navigation }) {
    return (
        <>
            <Header title={'Terms and Conditions'} navigation={navigation} />
            <ScrollView>
            <View style={globalStyles.container}>
                    <Text style={globalStyles.termsText}>
                        1.	User's Acknowledgment and Acceptance of Terms

                        My Med Diaries L.L.C. d.b.a. My Medical Diary (referred to as "us" or "we") provides access to the mobile application My Medical Diary and various related services (together referred to as this "app") subject to your compliance with all the terms, conditions, and notices contained or referenced herein (the "Terms of Use"), as well as any other written agreement between us (or your company). In addition, when using particular services or materials on this app, users shall be subject to any posted guidelines or rules applicable to such services or materials that may contain terms and conditions in addition to those in these Terms of Use. All such guidelines or rules are hereby incorporated by reference into these Terms of Use.

                        BY COMPLETING THE REGISTRATION PROCESS AND/OR USING THIS APP, YOU AGREE TO BE BOUND BY THESE TERMS OF USE.  IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS OF USE, PLEASE EXIT THE APP NOW.  YOUR REMEDY FOR DISSATISFACTION WITH THIS APP, OR ANY PRODUCTS, SERVICES, CONTENT, OR OTHER INFORMATION AVAILABLE ON OR THROUGH THIS APP, IS TO STOP USING THE APP AND/OR THOSE PARTICULAR PRODUCTS OR SERVICES.  YOUR AGREEMENT WITH US REGARDING COMPLIANCE WITH THESE TERMS OF USE BECOMES EFFECTIVE IMMEDIATELY UPON COMMENCEMENT OF YOUR USE OF THIS APP.

                        If you are under the age of eighteen (18), you agree that you have your parent or guardian’s permission to use the Site. Please have them read these Terms with you.

                        If you are a parent or legal guardian of a user that is under the age of eighteen (18), by allowing your child to use the Site you are subject to these Terms and are responsible for your child’s activity on the Site.

                        These Terms of Use are effective as of August 1, 2022. We reserve the right to change these Terms of Use from time to time without notice to you. You acknowledge and agree that it is your responsibility to review this app and these Terms of Use periodically and to be aware of any modifications. Your continued use of this app after such modifications will constitute your acknowledgment of the modified Terms of Use and agreement to abide and be bound by the modified Terms of Use.

                        As used in these Terms of Use, references to our "Affiliates" include our owners, subsidiaries, affiliated companies, officers, directors, suppliers, partners, sponsors, and advertisers, and includes (without limitation) all parties involved in creating, producing, and/or delivering this app and/or its contents.

                        2.	Description of Services

                        We make various services available on or through this app including, but not limited to keeping personal medical information for the purpose of tracking and managing your healthcare information. You, as the user, are responsible for creating a user account and submitting your personal health data through the app. OUR SERVICE IS NOT INTENDED TO TREAT OR DIAGNOSE ANY MEDICAL CONDITION. OUR SERVICE DOES NOT PROVIDE ANY REVIEW OF YOUR HEALTHCARE INFORMATION BY ANY DOCTOR OR OTHER MEDICAL PROFESSIONAL. IT IS YOUR RESPONSIBILITY TO PRESENT YOUR MEDICAL DATA TO YOUR PHYSICIAN FOR ANALYSIS AND DIAGNOSIS.

                        We reserve the sole right to either modify or discontinue the app, including any features therein, at any time with or without notice to you.  We shall not be liable to you, or any third party should we exercise such right. Modifications may include, but are not limited to, changes in the pricing structure, the addition of fee-based services, or changes to limitations on allowable file sizes.  Any new features that augment or enhance the then-current services on this app shall also be subject to these Terms of Use.

                        You understand and agree that temporary interruptions of the services available through this app may occur as normal events. You further understand and agree that we have no control over third party networks you may access in the course of the use of this app, and therefore, delays and disruption of other network transmissions are completely beyond our control.

                        Further, My Med Diaries L.L.C. d.b.a. My Medical Diary shall be excused from any delay or failure in performance required as a part of their service if caused by reason of any occurrence or contingency beyond its reasonable control, including, but not limited to, acts of God, acts of war, acts of government, epidemic, pandemic or global health crisis, fire, ordinances or regulations, strikes, earthquakes, floods, explosions, or other acts of nature. The obligations of My Med Diaries L.L.C. d.b.a. My Medical Diary so excused shall be extended on a day-to-day basis for the time period equal to the period of such excusable interruption.

                        You understand and agree that the services available on this app are provided "AS IS" and that we assume no responsibility for the timeliness, deletion, or mis-delivery of third-party suppliers.

                        3.	Registration Data and Privacy

                        In order to access some of the services on this app, you will require a separate account and password that can be obtained by completing our online registration form, which requests certain information and data ("Registration Data") and maintaining and updating your Registration Data as required. By registering, you agree that all information provided in the Registration Data is true and accurate and that you will maintain and update this information as required in order to keep it current, complete and accurate. You are solely responsible for maintaining the confidentiality of your account and password, and you accept responsibility for all activities that occur under your account.

                        You also grant us the right to disclose to third parties certain Registration Data about you. The information we obtain through your use of this app, including your Registration Data, is subject to our Privacy Policy, which is specifically incorporated by reference into these Terms of Use.

                        4.	Payment of Fees

                        If you purchase a service on this app that requires payment of a fee, you agree to pay all fees associated with such service. For all charges for services on this app, we will be required to enter in your credit card. All fees are non-refundable. You agree to provide us with accurate and complete billing information, including valid credit card information, your name, address and telephone number, and to provide us with any changes in such information within seven (7) days of the change.

                        If, for any reason, your credit card company refuses to pay the amount billed for the service, you agree that we may, at our option, suspend or terminate the service and require you to pay the overdue amount by other means acceptable to us. We may charge a fee for reinstatement of suspended or terminated accounts.

                        In the event legal action is necessary to collect on balances due, you agree to reimburse us for all expenses incurred to recover sums due, including attorney fees and other legal expenses.

                        5.	Conduct on App

                        Your use of the app is subject to all applicable laws and regulations, and you are solely responsible for the contents of your communications through the app. By utilizing the services available to you through this app, you agree that you will not upload or otherwise distribute or facilitate distribution of any content -- including text, communications, software, images, sounds, data, or other information -- that:

                        (a)	Is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, tortious, contains explicit or graphic descriptions or accounts of sexual acts (including but not limited to sexual language of a violent or threatening nature directed at another individual or group of individuals), or otherwise violates our rules or policies.

                        (b)	Victimizes, harasses, degrades, or intimidates an individual or group of individuals on the basis of religion, gender, sexual orientation, race, ethnicity, age, or disabilities.

                        (c)	Infringes on any patent, trademark, trade secret, copyright, right of publicity, or other proprietary right of any party.

                        (d)	Constitutes unauthorized or unsolicited advertising, junk or bulk email (also known as "spamming"), chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling.

                        (e)	Contains software viruses or any other computer code, files, or programs that are designed or intended to disrupt, damage, or limit the functioning of any software, hardware, or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of any third party; or

                        (f)	Impersonates any person or entity, including any of our employees or representatives.

                        We neither endorse nor assume any liability for the contents of any material uploaded or submitted by you or third-party users of the app. We and our agents have the right at their sole discretion to remove any content that, in our judgment, does not comply with these Terms of Use and any other rules of user conduct for our app, or is otherwise harmful, objectionable, or inaccurate. We are not responsible for any failure or delay in removing such content. You hereby consent to such removal and waive any claim against us arising out of such removal of content. See "Use of Your Materials" below for a description of the procedures to be followed in the event that any party believes that content posted on this app infringes on any patent, trademark, trade secret, copyright, right of publicity, or other proprietary right of any party.

                        In addition, you may not use your account to breach security of another account or attempt to gain unauthorized access to another network or server. Not all areas of the app may be available to you or other authorized users of the app. You shall not interfere with anyone else's use and enjoyment of the app or other similar services. Users who violate systems or network security may incur criminal or civil liability.

                        6.	Third Party Apps and Information

                        This app may link you to other apps on the internet or otherwise include references to information, documents, materials and/or services provided by other parties. These apps may contain information or material that some people may find inappropriate or offensive. These other apps and parties are not under our control, and you acknowledge that we are not responsible for the accuracy, copyright compliance, legality, decency, or any other aspect of the content of such apps, nor are we responsible for errors or omissions in any references to other parties or their products and services. The inclusion of such a link or reference is provided merely as a convenience and does not imply endorsement of, or association with, the app or party by us, or any warranty of any kind, either express or implied.

                        7.	Intellectual Property Information

                        Copyright (c) 202_ My Med Diaries L.L.C. d.b.a. My Medical Diary All Rights Reserved.

                        For purposes of these Terms of Use, "content" is defined as any information, communications, photos, video, graphics, music, sounds, and other material and services that can be viewed by users on our app.

                        By accepting these Terms of Use, you acknowledge and agree that all content presented to you on this app is protected by copyrights, trademarks, service marks, patents or other proprietary rights and laws, and is the sole property of My Med Diaries L.L.C. d.b.a. My Medical Diary and/or its Affiliates. You are only permitted to use the content as expressly authorized by us or the specific content provider. Except for a single copy made for personal use only, you may not copy, reproduce, modify any content, documents, or information from this app in any form or by any means without prior written permission from us or the specific content provider, and you are solely responsible for obtaining permission before reusing any copyrighted material that is available on this app. You are only permitted to transmit or distribute our content that is available on this app if information, images, and/ or reference materials remain wholly intact to include our logos and other branding information. Any unauthorized use of the materials appearing on this app may violate copyright, trademark and other applicable laws and could result in criminal or civil penalties.

                        Neither we or our Affiliates warrant or represent that your use of materials displayed on, or obtained through, this app will not infringe the rights of third parties. See "Use of Your Materials" below for a description of the procedures to be followed in the event that any party believes that content posted on this app infringes on any patent, trademark, trade secret, copyright, right of publicity, or other proprietary right of any party.

                        Nothing in these Terms of Use grants you any right to use any trademark, service mark, logo, and/or the name of My Med Diaries L.L.C. d.b.a. My Medical Diary or its Affiliates.

                        8.	User's Materials and Submission

                        Subject to our Privacy Policy, any communication or material that you transmit to this app or to us, whether by electronic mail or other means, for any reason, will be treated as non-confidential and non-proprietary.

                        Please do not submit confidential or proprietary information to us unless we have mutually agreed in writing otherwise. We are also unable to accept your unsolicited ideas or proposals, so please do not submit them to us in any circumstance.

                        You are solely responsible for the materials that you share, email, transmit, or otherwise make available to us via submission. BY MAKING A SUBMISSION, YOU AGREE THAT THE TRANSMIT OF INFORMATION TO US WILL NOT BE PROTECTED IN ACCORDANCE WITH THE HEALTH INSURANCE PORTABILITY AND ACCOUNTABILITY ACT OF 1996 (“HIPAA”). ONCE INFORMATION HAS BEEN RECEIVED BY US, WE WILL STORE ALL HEALTH INFORMATION IN YOUR PASSWORD PROTECTED ACCOUNT FOLLOWING HIPAA GUIDELINES. YOU AGREE THAT YOU MUST EVALUATE, AND BEAR ALL RISKS ASSOCIATED WITH YOUR DISCLOSURE OF ANY SUBMISSION AND STORAGE OF PERSONAL INFORMATION.

                        9.	Disclaimer of Warranties

                        ALL MATERIALS AND SERVICES ON THIS APP ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, OR THE WARRANTY OF NON-INFRINGEMENT.  WITHOUT LIMITING THE FOREGOING, WE MAKE NO WARRANTY THAT (a) THE SERVICES AND MATERIALS WILL MEET YOUR REQUIREMENTS, (b) THE SERVICES AND MATERIALS WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (c) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES OR MATERIALS WILL BE EFFECTIVE, ACCURATE OR RELIABLE, OR (d) THE QUALITY OF ANY PRODUCTS, SERVICES, OR INFORMATION PURCHASED OR OBTAINED BY YOU FROM THE APP FROM US OR OUR AFFILIATES WILL MEET YOUR EXPECTATIONS OR BE FREE FROM MISTAKES, ERRORS OR DEFECTS.

                        YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT WE ARE NOT RESPONSIBLE FOR ANY HEALTHCARE OR RELATED DECISIONS MADE BY YOU OR YOUR HEALTHCARE PROFESSIONAL BASED UPON DATA COLLECTED, TRANSMITTED, OR DISPLAYED BY OR ON OUR SERVICE, WHETHER SUCH DATA IS ACCURATE OR INACCURATE. YOU UNDERSTAND THAT A MEDICAL PROFESSIONAL WILL NOT CONTACT YOU TO CONSULT ABOUT THE MEDICAL IMPRESSIONS THAT ARE PROVIDED AS A PART OF OUR SERVICE. IT IS YOUR SOLE RESPONSIBILITY TO REVIEW THE MEDICAL IMPRESSIONS AND FOLLOW ANY RECOMMENDATIONS THAT ARE PROVIDED BY OUR MEDICAL PROFESSIONALS THROUGH OUR SERVICE.  YOU UNDERSTAND THAT THE INFORMATION PROVIDED TO YOU IS INTENDED TO EDUCATE YOU ABOUT SUBJECTS PERTINENT TO YOUR CARDIOLOGY HEALTH AND YOU FURTHER ACKNOWLEDGE THAT OUR SERVICE IS NOT INTENDED TO BE A SUBSTITUTE FOR CONSULTATION WITH A PERSONAL PHYSICIAN. IF YOU HAVE A LIFE-THREATENING EMERGENCY, PLEASE CALL 911 OR YOUR LOCAL EMERGENCY RESPONSE UNIT.

                        THIS APP COULD INCLUDE TECHNICAL OR OTHER MISTAKES, INACCURACIES OR TYPOGRAPHICAL ERRORS.  WE MAY MAKE CHANGES TO THE MATERIALS AND SERVICES AT THIS APP, INCLUDING THE PRICES AND DESCRIPTIONS OF ANY PRODUCTS LISTED HEREIN, AT ANY TIME WITHOUT NOTICE.  THE MATERIALS OR SERVICES AT THIS APP MAY BE OUT OF DATE, AND WE MAKE NO COMMITMENT TO UPDATE SUCH MATERIALS OR SERVICES.

                        THE USE OF THE SERVICES OR THE DOWNLOADING OR OTHER ACQUISITION OF ANY MATERIALS THROUGH THIS APP IS DONE AT YOUR OWN DISCRETION AND RISK AND WITH YOUR AGREEMENT THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM SUCH ACTIVITIES.

                        Through your use of the app, you may have the opportunities to engage in transactions with other users and vendors. You acknowledge that all transactions relating to any merchandise or services offered by any party, including, but not limited to the purchase terms, payment terms, warranties, guarantees, maintenance and delivery terms relating to such transactions, are agreed to solely between the seller or purchaser of such merchandise and services and you. WE MAKE NO WARRANTY REGARDING ANY TRANSACTIONS EXECUTED THROUGH, OR IN CONNECTION WITH THIS APP, AND YOU UNDERSTAND AND AGREE THAT SUCH TRANSACTIONS ARE CONDUCTED ENTIRELY AT YOUR OWN RISK. ANY WARRANTY THAT IS PROVIDED IN CONNECTION WITH ANY PRODUCTS, SERVICES, MATERIALS, OR INFORMATION AVAILABLE ON OR THROUGH THIS APP FROM A THIRD PARTY IS PROVIDED SOLELY BY SUCH THIRD PARTY, AND NOT BY US OR ANY OTHER OF OUR AFFILIATES.

                        Before purchasing products and services on or through this app, review our Sales Terms and Conditions, which are incorporated by reference into these Terms of Use.

                        Content available through this app may represent the opinions and judgments of an information provider, app user, or other person or entity not connected with My Med Diaries L.L.C. d.b.a. My Medical Diary. We do not endorse, nor are we responsible for the accuracy or reliability of, any opinion, advice, or statement made by anyone other than an authorized My Med Diaries L.L.C. d.b.a. My Medical Diary spokesperson speaking in his/her official capacity. Please refer to the specific editorial policies posted on various sections of this app for further information, which policies are incorporated by reference into these Terms of Use.

                        SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.

                        10.	Limitation of Liability

                        Your exclusive remedy and our entire liability, if any, for any claims arising out of these Terms of Use and your use of this app shall be limited to the amount you paid us for the services on the app during the three (3) month period before the act giving rise to the liability.

                        IN NO EVENT SHALL WE OR OUR AFFILIATES BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY SPECIAL, PUNITIVE, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, THOSE RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND ON ANY THEORY OF LIABILITY, ARISING OUT OF OR IN CONNECTION WITH THE USE OF THIS APP OR OF ANY WEBAPP REFERENCED OR LINKED TO FROM THIS APP. MY MEDICAL DIARY DBA MY MED DIARIES WILL NOT BE HELD LIABLE OR RESPONSIBLE FOR ANY INFORMATION DOCUMENTED OR SELECTED THAT IS FALSE, MISLEADING, INCOMPLETE, OR INCORRECTLY DOCUMENTED.


                        FURTHER, WE SHALL NOT BE LIABLE IN ANY WAY FOR THIRD PARTY GOODS AND SERVICES OFFERED THROUGH THIS APP OR FOR ASSISTANCE IN CONDUCTING TRANSACTIONS THROUGH THIS APP, INCLUDING WITHOUT LIMITATION THE EDUCATIONAL MATERIAL THAT IS PUBLISHED ON THE APP. ADDITIONALLY, WE SHALL NOT BE HELD LIABLE IN ANY WAY FOR RISKS ASSOCIATED WITH THE TRANSMISSION AND SUBMISSION OF MATERIALS RELATED TO YOUR PROTECTED HEALTH INFORMATION OR OTHER INFORMATION THAT MAY FALL UNDER HIPAA INCLUDING, BUT NOT LIMITED TO MEDICAL TEST RESULTS, AND OTHER PERSONAL HEALTH INFORMATION.

                        SOME JURISDICTIONS PROHIBIT THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.

                        11.	Indemnification

                        Upon a request by us, you agree to defend, indemnify, and hold us harmless from all liabilities, claims, and expenses, including attorney's fees, that arise from your use or misuse of this app. We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with us in asserting any available defenses.


                        12.	Security and Password

                        You are solely responsible for maintaining the confidentiality of your password and account and for any and all statements made and acts or omissions that occur through the use of your password and account, including any mail sent and any charges incurred. Therefore, you must take steps to ensure that others do not gain access to your password and account. Our personnel will never ask you for your password. You may not transfer or share your account with anyone, and we reserve the right to immediately terminate your account in the event of any unauthorized transfer or sharing thereof.

                        13.	International Use

                        Although this app may be accessible worldwide, we make no representation that materials on this app are appropriate or available for use in locations outside the United States and accessing them from territories where their contents are illegal is prohibited.  Those who choose to access this app from other locations do so on their own initiative and are responsible for compliance with local laws. Any offer for any product, service, and/or information made in connection with this app is void where prohibited.

                        14.	Termination of Use

                        You agree that we may, in our sole discretion, terminate or suspend your access to all or part of the app with or without notice and for any reason, including, without limitation, breach of these Terms of Use. Any suspected fraudulent, abusive, or illegal activity may be grounds for terminating your relationship and may be referred to appropriate law enforcement authorities.

                        Upon termination or suspension, regardless of the reasons therefore, your right to use the services available on this app immediately ceases, and you acknowledge and agree that we may immediately deactivate or delete your account and all related information and files in your account and/or bar any further access to such files or this app. We shall not be liable to you or any third party for any claims or damages arising out of any termination or suspension, or any other actions taken by us in connection therewith. These Terms of Use, as well as your liability for any unpaid fees, shall survive any termination.

                        15.	Governing Law

                        This app (excluding any linked apps) is controlled by us from our offices within the State of Texas, United States of America. It can be accessed from all 50 states, as well as from other countries around the world. As each of these places has laws that may differ from those of Texas, by accessing this app both of us agree that the statutes and laws of the State of Texas, without regard to its choice or conflict of law principles, will apply to all matters relating to the use of this app and the purchase of products and services available through this app. Each of us agrees all disputes will be resolved by Arbitration under the American Arbitration Association’s rules for Arbitration of consumer-related disputes and we hereby expressly waive trial by jury. We further agree that said arbitration will be conducted in Fort Bend County, Texas.

                        16.	Notices

                        All notices to a party shall be in writing and shall be made either via email or conventional mail. Notices to us must be sent to the attention of Customer Service at info@mymeddiaries.com, if by email, or at My Med Diaries L.L.C. d.b.a. My Medical Diary, P.O. Box 1652, Sugar Land, Texas 77487 if by conventional mail. Notices to you may be sent either to the email address supplied for your account or to the address supplied by you as part of your Registration Data. In addition, we may broadcast notices or messages through the app to inform you of changes to the app or other matters of importance, and such broadcasts shall constitute notice to you.

                        Any notices or communication under these Terms of Use will be deemed delivered to the party receiving such communication (a) on the delivery date if delivered personally to the party; (b) two business days after deposit with a commercial overnight carrier, with written verification of receipt; (c) five business days after the mailing date, if sent by US mail, return receipt requested; (d) on the delivery date if transmitted by confirmed facsimile; or (e) on the delivery date if transmitted by confirmed email.

                        17.	Entire Agreement

                        These terms and conditions constitute the entire agreement and understanding between us concerning the subject matter hereof and supersedes all prior agreements and understandings of the parties with respect thereto. These Terms of Use may NOT be altered, supplemented, or amended by the use of any other document(s). Any attempt to alter, supplement or amend this document or to enter an order for products or services which are subject to additional or altered terms and conditions shall be null and void, unless otherwise agreed to in a written agreement signed by you and us. To the extent that anything in or associated with this app is in conflict or inconsistent with these Terms of Use, these Terms of Use shall take precedence.

                        18.	Miscellaneous

                        In any action to enforce these Terms of Use, the prevailing party will be entitled to costs and attorney’s fees. Any cause of action brought by you against us, or our Affiliates must be instituted within one (1) year after the cause of action arises or be deemed forever waived and barred.

                        You may not assign your rights and obligations under these Terms of Use to any third party, and any purported attempt to do so shall be null and void. We may free assign our rights and obligations under these Terms of Use.

                        You agree not to sell, resell, reproduce, duplicate, copy or use for any commercial purposes any portion of this app, or use of or access to this app.

                        In addition to any excuse provided by applicable law, we shall be excused from liability for non-delivery or delay in delivery of products and services available through our app arising from any event beyond our reasonable control, whether or not foreseeable by either party, including but not limited to, labor disturbance, war, fire, accident, adverse weather, global pandemic or health crisis, inability to secure transportation, governmental act or regulation, and other causes or events beyond our reasonable control, whether or not similar to those which are enumerated above.

                        If any part of these Terms of Use is held invalid or unenforceable, that portion shall be construed in a manner consistent with applicable law to reflect, as nearly as possible, the original intentions of the parties, and the remaining portions shall remain in full force and effect.

                        Any failure by us to enforce or exercise any provision of these Terms of Use or related rights shall not constitute a waiver of that right or provision.

                        19.	Contact Information

                        Except as explicitly noted on this app, the services available through this app are offered by My Med Diaries L.L.C. d.b.a. My Medical Diary, a Texas limited liability company, located at P.O. Box 1652, Sugar Land, Texas 77487. If you are a Texas resident, you may have this same information emailed to you by sending a letter to the foregoing address with your email address and a request for this information. The Complaint Assistance Unit of the Division of Consumer Services of the Department of Consumer Affairs may be contacted in writing at PO Box 12548 Austin, Texas 78711-2548. If you notice that any user is violating these Terms of Use, please contact us at info@mymeddiaries.com.
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

