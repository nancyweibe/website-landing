import { useEffect, useState } from "react";
import styles from "./TermsViewer.module.scss"
import { Button, Container, Row, Col } from "react-bootstrap";

const PrivacyViewer = ({ isActive }) => {

  const [playSplitting, setPlaySplitting] = useState(false)

  useEffect(() => {
    document.body.classList.add("full-scroll")
    if (isActive) {
      setTimeout(() => {
        setPlaySplitting(true)
      }, 500)
    }

    return () => document.body.classList.remove("full-scroll")
  }, [isActive])

  return (
    <section className={`${styles.root}`}>
      <Container>
        <Row>
          <Col className={`${playSplitting ? 'play' : ''}`} md={12}>
            <h1 data-splitting>Privacy policy</h1>
            <div className="entry-d-2">
              <p>We respect your privacy and are committed to protecting it through our compliance with this privacy policy (&ldquo;Policy&rdquo;). This Policy describes the types of information we may collect from you or that you may provide (&ldquo;Personal Information&rdquo;) on the <a href="http://www.muunifi.com/">muunifi.com</a> website (&ldquo;Website&rdquo;), &ldquo;muunifi&rdquo; mobile application (&ldquo;Mobile Application&rdquo;), and any of their related products and services (collectively, &ldquo;Services&rdquo;), and our practices for collecting, using, maintaining, protecting, and disclosing that Personal Information. It also describes the choices available to you regarding our use of your Personal Information and how you can access and update it.</p>
              <p>This Policy is a legally binding agreement between you (&ldquo;User&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo;) and MarketShares, LLC (doing business as &ldquo;Muunifi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms &ldquo;User&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo; shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Services. By accessing and using the Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.</p>
              <h2><strong>Collection of personal information</strong></h2>
              <p>You can access and use the Services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the features offered on the Services, you may be asked to provide certain Personal Information (for example, your name and e-mail address).</p>
              <p>We receive and store any information you knowingly provide to us when you create an account, publish content, or fill any forms on the Services. When required, this information may include the following:</p>
              <ul>
                <li>
                  <p> Account details (such as user name, unique user ID, password, etc)</p>
                </li>
                <li>
                  <p> Contact information (such as email address, phone number, etc)</p>
                </li>
                <li>
                  <p> Basic personal information (such as name, country of residence, etc)</p>
                </li>
                <li>
                  <p> Geolocation data of your device (such as latitude and longitude)</p>
                </li>
                <li>
                  <p> Certain features on the mobile device (such as contacts, calendar, gallery, etc)</p>
                </li>
                <li>
                  <p> Any other materials you willingly submit to us (such as articles, images, feedback, etc)</p>
                </li>
              </ul>
              <p>Some of the information we collect is directly from you via the Services. However, we may also collect Personal Information about you from other sources such as public databases, social media platforms, third-party data providers, and our joint marketing partners. Personal Information we collect from other sources may include demographic information, such as age and gender, device information, such as IP addresses, location, such as city and state, and online behavioral data, such as information about your use of social media websites, page view information and search results and links.</p>
              <p>You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of some of the features on the Services. Users who are uncertain about what information is mandatory are welcome to contact us.</p>
              <h2><strong>Privacy of children</strong></h2>
              <p>We do not knowingly collect any Personal Information from children under the age of 13. If you are under the age of 13, please do not submit any Personal Information through the Services. If you have reason to believe that a child under the age of 13 has provided Personal Information to us through the Services, please contact us to request that we delete that child's Personal Information from our Services.</p>
              <p>We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through the Services without their permission. We also ask that all parents and legal guardians overseeing the care of children take the necessary precautions to ensure that their children are instructed to never give out Personal Information when online without their permission.</p>
              <h2><strong>Use and processing of collected information</strong></h2>
              <p>We act as a data controller and a data processor in terms of the GDPR when handling Personal Information, unless we have entered into a data processing agreement with you in which case you would be the data controller and we would be the data processor.</p>
              <p>Our role may also differ depending on the specific situation involving Personal Information. We act in the capacity of a data controller when we ask you to submit your Personal Information that is necessary to ensure your access and use of the Services. In such instances, we are a data controller because we determine the purposes and means of the processing of Personal Information and we comply with data controllers' obligations set forth in the GDPR.</p>
              <p>We act in the capacity of a data processor in situations when you submit Personal Information through the Services. We do not own, control, or make decisions about the submitted Personal Information, and such Personal Information is processed only in accordance with your instructions. In such instances, the User providing Personal Information acts as a data controller in terms of the GDPR.</p>
              <p>In order to make the Services available to you, or to meet a legal obligation, we may need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested products or services. Any of the information we collect from you may be used for the following purposes:</p>
              <ul>
                <li>
                  <p> Create and manage user accounts</p>
                </li>
                <li>
                  <p> Improve products and services</p>
                </li>
                <li>
                  <p> Send administrative information</p>
                </li>
                <li>
                  <p> Send marketing and promotional communications</p>
                </li>
                <li>
                  <p> Send product and service updates</p>
                </li>
                <li>
                  <p> Respond to inquiries and offer support</p>
                </li>
                <li>
                  <p> Request user feedback</p>
                </li>
                <li>
                  <p> Improve user experience</p>
                </li>
                <li>
                  <p> Post customer testimonials</p>
                </li>
                <li>
                  <p> Deliver targeted advertising</p>
                </li>
                <li>
                  <p> Administer prize draws and competitions</p>
                </li>
                <li>
                  <p> Enforce terms and conditions and policies</p>
                </li>
                <li>
                  <p> Protect from abuse and malicious users</p>
                </li>
                <li>
                  <p> Respond to legal requests and prevent harm</p>
                </li>
                <li>
                  <p> Run and operate the Services</p>
                </li>
              </ul>
              <p>Processing your Personal Information depends on how you interact with the Services, where you are located in the world and if one of the following applies: (i) you have given your consent for one or more specific purposes; this, however, does not apply, whenever the processing of Personal Information is subject to California Consumer Privacy Act or European data protection law; (ii) provision of information is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof; (iii) processing is necessary for compliance with a legal obligation to which you are subject; (iv) processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; (v) processing is necessary for the purposes of the legitimate interests pursued by us or by a third party. We may also combine or aggregate some of your Personal Information in order to better serve you and to improve and update our Services.</p>
              <p>We rely on the following legal bases as defined in the GDPR upon which we collect and process your Personal Information:</p>
              <ul>
                <li>
                  <p> User's consent</p>
                </li>
              </ul>
              <p>Note that under some legislations we may be allowed to process information until you object to such processing by opting out, without having to rely on consent or any other of the legal bases above. In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Information is a statutory or contractual requirement, or a requirement necessary to enter into a contract.</p>
              <h2><strong>Managing information</strong></h2>
              <p>You are able to delete certain Personal Information we have about you. The Personal Information you can delete may change as the Services change. When you delete Personal Information, however, we may maintain a copy of the unrevised Personal Information in our records for the duration necessary to comply with our obligations to our affiliates and partners, and for the purposes described below. If you would like to delete your Personal Information or permanently delete your account, you can do so on the settings page of your account on the Services.</p>
              <h2> <strong>Disclosure of information</strong></h2>
              <p>Depending on the requested Services or as necessary to complete any transaction or provide any Service you have requested, we may share your information with our trusted subsidiaries and joint venture partners, affiliates, contracted companies, and service providers (collectively, &ldquo;Service Providers&rdquo;) we rely upon to assist in the operation of the Services available to you and whose privacy policies are consistent with ours or who agree to abide by our policies with respect to Personal Information. We will not share any personally identifiable information with third parties and will not share any information with unaffiliated third parties.</p>
              <p>Service Providers are not authorized to use or disclose your information except as necessary to perform services on our behalf or comply with legal requirements. Service Providers are given the information they need only in order to perform their designated functions, and we do not authorize them to use or disclose any of the provided information for their own marketing or other purposes.</p>
              <p>We may also disclose any Personal Information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.</p>
              <h2><strong>Retention of information</strong></h2>
              <p>We will retain and use your Personal Information for the period necessary to comply with our legal obligations, as long as your user account remains active, to enforce our agreements, resolve disputes, and unless a longer retention period is required or permitted by law.</p>
              <p>We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Once the retention period expires, Personal Information shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification, and the right to data portability cannot be enforced after the expiration of the retention period.</p>
              <h2><strong>Transfer of information</strong></h2>
              <p>Depending on your location, data transfers may involve transferring and storing your information in a country other than your own, including USA. The transfer of your Personal Information to countries outside the European Union will be made only if you have explicitly consented to it or in the cases provided for by the GDPR and will be processed in your interest.</p>
              <p>You are entitled to learn about the legal basis of information transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by us to safeguard your information. If any such transfer takes place, you can find out more by checking the relevant sections of this Policy or inquire with us using the information provided in the contact section.</p>
              <h2><strong>Data protection rights under the GDPR</strong></h2>
              <p>If you are a resident of the European Economic Area (&ldquo;EEA&rdquo;), you have certain data protection rights and we aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Information. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us. In certain circumstances, you have the following data protection rights:</p>
              <p>(i) You have the right to withdraw consent where you have previously given your consent to the processing of your Personal Information. To the extent that the legal basis for our processing of your Personal Information is consent, you have the right to withdraw that consent at any time. Withdrawal will not affect the lawfulness of processing before the withdrawal.</p>
              <p>(ii) You have the right to learn if your Personal Information is being processed by us, obtain disclosure regarding certain aspects of the processing, and obtain a copy of your Personal Information undergoing processing.</p>
              <p>(iii) You have the right to verify the accuracy of your information and ask for it to be updated or corrected. You also have the right to request us to complete the Personal Information you believe is incomplete.</p>
              <p>(iv) You have the right to object to the processing of your information if the processing is carried out on a legal basis other than consent. Where Personal Information is processed for the public interest, in the exercise of an official authority vested in us, or for the purposes of the legitimate interests pursued by us, you may object to such processing by providing a ground related to your particular situation to justify the objection. You must know that, however, should your Personal Information be processed for direct marketing purposes, you can object to that processing at any time without providing any justification. To learn whether we are processing Personal Information for direct marketing purposes, you may refer to the relevant sections of this Policy.</p>
              <p>(v) You have the right, under certain circumstances, to restrict the processing of your Personal Information. These circumstances include: the accuracy of your Personal Information is contested by you and we must verify its accuracy; the processing is unlawful, but you oppose the erasure of your Personal Information and request the restriction of its use instead; we no longer need your Personal Information for the purposes of processing, but you require it to establish, exercise or defend your legal claims; you have objected to processing pending the verification of whether our legitimate grounds override your legitimate grounds. Where processing has been restricted, such Personal Information will be marked accordingly and, with the exception of storage, will be processed only with your consent or for the establishment, to exercise or defense of legal claims, for the protection of the rights of another natural, or legal person or for reasons of important public interest.</p>
              <p>(vi) You have the right, under certain circumstances, to obtain the erasure of your Personal Information from us. These circumstances include: the Personal Information is no longer necessary in relation to the purposes for which it was collected or otherwise processed; you withdraw consent to consent-based processing; you object to the processing under certain rules of applicable data protection law; the processing is for direct marketing purposes; and the personal data have been unlawfully processed. However, there are exclusions of the right to erasure such as where processing is necessary: for exercising the right of freedom of expression and information; for compliance with a legal obligation; or for the establishment, to exercise or defense of legal claims.</p>
              <p>(vii) You have the right to receive your Personal Information that you have provided to us in a structured, commonly used, and machine-readable format and, if technically feasible, to have it transmitted to another controller without any hindrance from us, provided that such transmission does not adversely affect the rights and freedoms of others.</p>
              <p>(viii) You have the right to complain to a data protection authority about our collection and use of your Personal Information. If you are not satisfied with the outcome of your complaint directly with us, you have the right to lodge a complaint with your local data protection authority. For more information, please contact your local data protection authority in the EEA. This provision is applicable provided that your Personal Information is processed by automated means and that the processing is based on your consent, on a contract which you are part of, or on pre-contractual obligations thereof.</p>
              <h2><strong>California privacy rights</strong></h2>
              <p>Consumers residing in California are afforded certain additional rights with respect to their Personal Information under the California Consumer Privacy Act (&ldquo;CCPA&rdquo;). If you are a California resident, this section applies to you.</p>
              <p>As described in this Policy in the information collection section above, we have collected the categories of Personal Information listed below in the past twelve (12) months:</p>
              <ul>
                <li>
                  <p> Personal identifiers (such as email address, phone number, etc)</p>
                </li>
                <li>
                  <p> Person's characteristics (such as age, gender, etc)</p>
                </li>
              </ul>
              <p>As described in this Policy in the disclosure section above, we have disclosed the categories of Personal Information listed below in the past twelve (12) months:</p>
              <ul>
                <li>
                  <p> Personal identifiers (such as email address, phone number, etc)</p>
                </li>
                <li>
                  <p> Person's characteristics (such as age, gender, etc)</p>
                </li>
              </ul>
              <p>In addition to the rights as explained in this Policy, California residents who provide Personal Information as defined in the statute to obtain Services for personal, family, or household use are entitled to request and obtain from us, once a calendar year, information about the categories and specific pieces of Personal Information we have collected and disclosed.</p>
              <p>Furthermore, California residents have the right to request deletion of their Personal Information or opt-out of the sale of their Personal Information which may include selling, disclosing, or transferring Personal Information to another business or a third party for monetary or other valuable consideration. To do so, simply contact us. We will not discriminate against you if you exercise your rights under the CCPA.</p>
              <p>In some instances, you may have the opportunity to provide Personal Information in exchange for a financial incentive or price or difference in Services which means any difference in the level or quality of any Services offered to any User related to the collection, retention, or sale of Personal Information.</p>
              <h2><strong>How to exercise your rights</strong></h2>
              <p>Any requests to exercise your rights can be directed to us through the contact details provided in this document. Please note that we may ask you to verify your identity before responding to such requests. Your request must provide sufficient information that allows us to verify that you are the person you are claiming to be or that you are the authorized representative of such person. If we receive your request from an authorized representative, we may request evidence that you have provided such an authorized representative with power of attorney or that the authorized representative otherwise has valid written authority to submit requests on your behalf.</p>
              <p>You must include sufficient details to allow us to properly understand the request and respond to it. We cannot respond to your request or provide you with Personal Information unless we first verify your identity or authority to make such a request and confirm that the Personal Information relates to you.</p>
              <h2><strong>Cookies</strong></h2>
              <p>Our Services use &ldquo;cookies&rdquo; to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. If you choose to decline cookies, you may not be able to fully experience the features of the Services. You may learn more about cookies and how they work in <a href="https://www.websitepolicies.com/blog/cookies">this guide</a>.</p>
              <p>We may use cookies to collect, store, and track information for security and personalization, to operate the Services, and for statistical purposes. Please note that you have the ability to accept or decline cookies. Most web browsers automatically accept cookies by default, but you can modify your browser settings to decline cookies if you prefer.</p>
              <h2><strong>Data analytics</strong></h2>
              <p>Our Services may use third-party analytics tools that use cookies, web beacons, or other similar information-gathering technologies to collect standard internet activity and usage information. The information gathered is used to compile statistical reports on User activity such as how often Users visit our Services, what pages they visit and for how long, etc. We use the information obtained from these analytics tools to monitor the performance and improve our Services. We do not use third-party analytics tools to track or to collect any personally identifiable information of our Users and we will not associate any information gathered from the statistical reports with any individual User.</p>
              <h2><strong>Do Not Track signals</strong></h2>
              <p>Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from consumers who use or visit a website or online service as they move across different websites over time. The Services do not track its visitors over time and across third-party websites. However, some third-party websites may keep track of your browsing activities when they serve you content, which enables them to tailor what they present to you.</p>
              <h2><strong>Advertisements</strong></h2>
              <p>We may display online advertisements and we may share aggregated and non-identifying information about our customers that we or our advertisers collect through your use of the Services. We do not share personally identifiable information about individual customers with advertisers. In some instances, we may use this aggregated and non-identifying information to deliver tailored advertisements to the intended audience.</p>
              <p>We may also permit certain third-party companies to help us tailor advertising that we think may be of interest to Users and to collect and use other data about User activities on the Services. These companies may deliver ads that might place cookies and otherwise track User behavior.</p>
              <h2><strong>Social media features</strong></h2>
              <p>Our Services may include social media features, such as the Facebook and Twitter buttons, Share This buttons, etc (collectively, &ldquo;Social Media Features&rdquo;). These Social Media Features may collect your IP address, what page you are visiting on our Services, and may set a cookie to enable Social Media Features to function properly. Social Media Features are hosted either by their respective providers or directly on our Services. Your interactions with these Social Media Features are governed by the privacy policy of their respective providers.</p>
              <h2><strong>Push notifications</strong></h2>
              <p>We offer push notifications to which you may voluntarily subscribe at any time. To make sure push notifications reach the correct devices, we use a third-party push notifications provider who relies on a device token unique to your device which is issued by the operating system of your device. While it is possible to access a list of device tokens, they will not reveal your identity, your unique device ID, or your contact information to us or our third-party push notifications provider. We will maintain the information sent via e-mail in accordance with applicable laws and regulations. If, at any time, you wish to stop receiving push notifications, simply adjust your device settings accordingly.</p>
              <h2><strong>Affiliate links</strong></h2>
              <p>We may engage in affiliate marketing and have affiliate links present on the Services for the purpose of being able to offer you related or additional products and services. If you click on an affiliate link, a cookie will be placed on your browser to track any sales for purposes of commissions.</p>
              <h2><strong>Links to other resources</strong></h2>
              <p>The Services contain links to other resources that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other resources or third parties. We encourage you to be aware when you leave the Services and to read the privacy statements of each and every resource that may collect Personal Information.</p>
              <h2><strong>Information security</strong></h2>
              <p>We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in our control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.</p>
              <p>Therefore, while we strive to protect your Personal Information, you acknowledge that (i) there are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and privacy of any and all information and data exchanged between you and the Services cannot be guaranteed; and (iii) any such information and data may be viewed or tampered with in transit by a third party, despite best efforts.</p>
              <p>As the security of Personal Information depends in part on the security of the device you use to communicate with us and the security you use to protect your credentials, please take appropriate measures to protect this information.</p>
              <h2><strong>Data breach</strong></h2>
              <p>In the event we become aware that the security of the Services has been compromised or Users' Personal Information has been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the User as a result of the breach or if notice is otherwise required by law. When we do, we will post a notice on the Services, send you an email.</p>
              <h2><strong>Changes and amendments</strong></h2>
              <p>We reserve the right to modify this Policy or its terms related to the Services at any time at our discretion. When we do, we will post a notification within the Services. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.</p>
              <p>An updated version of this Policy will be effective immediately upon the posting of the revised Policy unless otherwise specified. Your continued use of the Services after the effective date of the revised Policy (or such other act specified at that time) will constitute your consent to those changes. However, we will not, without your consent, use your Personal Information in a manner materially different than what was stated at the time your Personal Information was collected.</p>
              <h2><strong>Acceptance of this policy</strong></h2>
              <p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Services and submitting your information you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Services.</p>
              <h2><strong>Contacting us</strong></h2>
              <p>If you have any questions regarding the information we may hold about you or if you wish to exercise your rights, you may use the following data subject request form to submit your request:</p>
              <p><a href="https://app.websitepolicies.com/dsar/view/lhj858fd">Submit a data access request</a></p>
              <p>If you have any other questions, concerns, or complaints regarding this Policy, we encourage you to contact us using the details below:</p>
              <p>help@muunifi.com</p>
              <p>We will attempt to resolve complaints and disputes and make every reasonable effort to honor your wish to exercise your rights as quickly as possible and in any event, within the timescales provided by applicable data protection laws.</p>
              <p>This document was last updated on June 21, 2022</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PrivacyViewer;