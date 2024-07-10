// REACT DEPENDANCES
import React from "react";
import { Link } from "react-router-dom";

// STYLES
import "../styles/styles.css";

// IMAGES
import ddosImage from "../images/DDOS.webp";
import sqlImage from "../images/SQL.webp";
import xssImage from "../images/XSS.webp";
import idorImage from "../images/IDOR.webp";
import lfiRfiImage from "../images/LFI.webp";
import mimtImage from "../images/MIMT.webp";
import phishingImage from "../images/PHISHING.webp";
import keyloggerImage from "../images/KEYLOGGER.webp";
import rockyouImage from "../images/ROCKYOU.webp";
import vulnerabilitiesImage from "../images/VULNERABILITEES.webp";
import logo from "../images/Untitledlogo1.png"

// COMPONENTS
import DangerosityBar from "./COMPONENTS_HOME/DangerosityBar";
import ButtonVuln from "./COMPONENTS_HOME/button_vulnerabilities";
import ParticlesBackground from "./COMPONENTS_HOME/particlesBackground";



export default function Home() {
  return (
    <div className="wrapper_général">
          <ParticlesBackground />
      <div className="wrapper_logo">
      <img className="logo_image" src={logo}></img>
      </div>
      <div className="wrapper_title_and_description">
              
      
        <div className="wrapper_title">
          <h1>
            IS MY WEBSITE <span className="red">VULNERABLE ???</span>
          </h1>
        </div>
        <div className="wrapper_description">
          <p>
            Is my website vulnerable to cyber-attacks? Don't worry, this website
            is here to help you find vulnerabilities. You can click on the
            following button to test your website. You can check the
            vulnerabilities that you want to test, but be cautious! Some
            vulnerabilities can be dangerous for your website. Don't worry if
            you don't know cybersecurity; we are here to help you make good
            choices.
          </p>
        </div>
        <div className="wrapper_button_testWebsite">
          <div class="btn-conteiner">
           <ButtonVuln />
           </div>
        </div>
      </div>
      <div className="wrapper_what_vulnérabilities_is_tested">
        <h2 className="transition_with_h2">What can the scanner scan :</h2>
        <div className="wrapper_images_description_DOSDDOS">
          <div className="wrapper_text_DOSDDOS">
            <div className="wrapper_soutitre">
              <h2>WHAT IS DOS/DDOS?</h2>
            </div>
            <div className="wrapper_description_dos">
              <p>
                A Denial of Service (DoS) attack is a malicious attempt to
                disrupt the normal functioning of a targeted server, service, or
                network by overwhelming it with a flood of internet traffic. A
                Distributed Denial of Service (DDoS) attack amplifies this
                effect by using multiple compromised computer systems as sources
                of attack traffic.
              </p>
            </div>
            <div className="wrapper_dangerosity">
              <DangerosityBar level={8} />
            </div>
          </div>
          <div className="wrapper_text_DOSDDOS_img">
            <img className="imageDos" src={ddosImage} alt="DDoS Attack" />
          </div>
        </div>

        <div className="wrapper_images_description_SQL">
          <div className="wrapper_text_SQL_img">
            <img
              className="imageSql"
              src={sqlImage}
              alt="SQL Injection Attack"
            />
          </div>
          <div className="wrapper_text_SQL">
            <div className="wrapper_soutitre">
              <h2>WHAT IS SQL INJECTION?</h2>
            </div>
            <div className="wrapper_description_sql">
              <p>
                An SQL injection attack involves inserting or "injecting" a
                malicious SQL query via the input data from the client to the
                application. A successful SQL injection exploit can read
                sensitive data from the database, modify database data
                (Insert/Update/Delete), execute administration operations on the
                database, recover the content of a given file, and in some
                cases, issue commands to the operating system.
              </p>
            </div>
            <div className="wrapper_dangerosity">
              <DangerosityBar level={9} />
            </div>
          </div>
        </div>
        <div className="wrapper_images_description_XSS">
          <div className="wrapper_text_XSS">
            <div className="wrapper_soutitre">
              <h2>WHAT IS XSS?</h2>
            </div>
            <div className="wrapper_description_xss">
              <p>
                Cross-Site Scripting (XSS) is a type of security vulnerability
                typically found in web applications. XSS enables attackers to
                inject client-side scripts into web pages viewed by other users.
                A successful XSS attack can have serious consequences, such as
                stealing user data, hijacking sessions, defacing websites, or
                spreading malware.
              </p>
            </div>
            <div className="wrapper_dangerosity">
              <DangerosityBar level={7} />
            </div>
          </div>
          <div className="wrapper_text_XSS_img">
            <img className="imageXss" src={xssImage} alt="XSS Attack" />
          </div>
        </div>

        <div className="wrapper_images_description_IDOR">
          <div className="wrapper_text_IDOR_img">
            <img className="imageIdor" src={idorImage} alt="IDOR Attack" />
          </div>
          <div className="wrapper_text_IDOR">
            <div className="wrapper_soutitre">
              <h2>WHAT IS IDOR?</h2>
            </div>
            <div className="wrapper_description_idor">
              <p>
                Insecure Direct Object Reference (IDOR) is a type of access
                control vulnerability that arises when an application provides
                direct access to objects based on user-supplied input. This can
                lead to unauthorized access to data. If not properly checked, an
                attacker can manipulate input values to gain access to data they
                are not authorized to view.
              </p>
            </div>
            <div className="wrapper_dangerosity">
              <DangerosityBar level={6} />
            </div>
          </div>
        </div>

        <div className="wrapper_images_description_LFIRFI">
          <div className="wrapper_text_LFIRFI">
            <div className="wrapper_soutitre">
              <h2>WHAT IS LFI/RFI?</h2>
            </div>
            <div className="wrapper_description_lfi_rfi">
              <p>
                Local File Inclusion (LFI) and Remote File Inclusion (RFI) are
                vulnerabilities that allow an attacker to include files on a
                server through the web browser. LFI occurs when the web
                application includes files on the server, allowing an attacker
                to manipulate the path to a file. RFI occurs when the web
                application includes remote files through a URL, potentially
                allowing an attacker to execute remote code.
              </p>
            </div>
            <div className="wrapper_dangerosity">
              <DangerosityBar level={9} />
            </div>
          </div>
          <div className="wrapper_text_LFIRFI_img">
            <img
              className="imageLfiRfi"
              src={lfiRfiImage}
              alt="LFI/RFI Attack"
            />
          </div>
        </div>

        <div className="wrapper_images_description_MIMT">
          <div className="wrapper_text_MIMT_img">
            <img className="imageMimt" src={mimtImage} alt="MIMT Attack" />
          </div>
          <div className="wrapper_text_MIMT">
            <div className="wrapper_soutitre">
              <h2>WHAT IS MIMT?</h2>
            </div>
            <div className="wrapper_description_mimt">
              <p>
                A Man-in-the-Middle (MIMT) attack is a security breach where an
                attacker intercepts and possibly alters the communication
                between two parties who believe they are directly communicating
                with each other. This type of attack can lead to the theft of
                sensitive information such as login credentials, credit card
                numbers, and personal data.
              </p>
            </div>
            <div className="wrapper_dangerosity">
              <DangerosityBar level={8} />
            </div>
          </div>
        </div>

        <div className="wrapper_images_description_PHISHING">
          <div className="wrapper_text_PHISHING">
            <div className="wrapper_soutitre">
              <h2>WHAT IS PHISHING?</h2>
            </div>
            <div className="wrapper_description_phishing">
              <p>
                Phishing is a type of cyber attack where attackers disguise
                themselves as trustworthy entities to trick individuals into
                providing sensitive information such as usernames, passwords,
                and credit card details. This is typically done through
                deceptive emails, websites, or messages.
              </p>
            </div>
            <div className="wrapper_dangerosity">
              <DangerosityBar level={7} />
            </div>
          </div>
          <div className="wrapper_text_PHISHING_img">
            <img
              className="imagePhishing"
              src={phishingImage}
              alt="Phishing Attack"
            />
          </div>
        </div>

        <div className="wrapper_images_description_KEYLOGGER">
          <div className="wrapper_text_KEYLOGGER_img">
            <img
              className="imageKeylogger"
              src={keyloggerImage}
              alt="Keylogger Attack"
            />
          </div>
          <div className="wrapper_text_KEYLOGGER">
            <div className="wrapper_soutitre">
              <h2>WHAT IS A KEYLOGGER?</h2>
            </div>
            <div className="wrapper_description_keylogger">
              <p>
                A keylogger is a type of surveillance technology used to monitor
                and record each keystroke typed on a specific computer's
                keyboard. Keyloggers can be used for legitimate purposes, such
                as monitoring employees' computer activities, but they are also
                commonly used by cybercriminals to steal personal information,
                login credentials, and sensitive data.
              </p>
            </div>
            <div className="wrapper_dangerosity">
              <DangerosityBar level={8} />
            </div>
          </div>
        </div>

        <div className="wrapper_images_description_ROCKYOU">
          <div className="wrapper_text_ROCKYOU">
            <div className="wrapper_soutitre">
              <h2>WHAT IS BRUTE FORCING?</h2>
            </div>
            <div className="wrapper_description_rockyou">
              <p>
                Brute forcing is a trial-and-error method used to decode
                encrypted data such as passwords or Data Encryption Standard
                (DES) keys. In a brute force attack, automated software is used
                to generate a large number of consecutive guesses as to the
                value of the desired data. It is often used to gain unauthorized
                access to user accounts by guessing passwords.
              </p>
            </div>
            <div className="wrapper_dangerosity">
              <DangerosityBar level={7} />
            </div>
          </div>
          <div className="wrapper_text_ROCKYOU_img">
            <img
              className="imageRockyou"
              src={rockyouImage}
              alt="Brute Forcing Attack"
            />
          </div>
        </div>

        <div className="wrapper_images_description_VULNERABILITIESNMAP_METASPLOIT">
          <div className="wrapper_text_VULNERABILITIESNMAP_METASPLOIT_img">
            <img
              className="imageVulnerabilities"
              src={vulnerabilitiesImage}
              alt="Vulnerabilities Scanned by Nmap and Metasploit"
            />
          </div>
          <div className="wrapper_text_VULNERABILITIESNMAP_METASPLOIT">
            <div className="wrapper_soutitre">
              <h2>WHAT ARE VULNERABILITIES SCANNED BY NMAP AND METASPLOIT?</h2>
            </div>
            <div className="wrapper_description_vulnerabilities">
              <p>
                Nmap (Network Mapper) and Metasploit are tools used by security
                professionals to discover and exploit vulnerabilities in
                networks and systems. Nmap is used to scan networks for open
                ports and services, identifying potential vulnerabilities.
                Metasploit is used to develop and execute exploit code against a
                remote target machine. Together, these tools help in
                identifying, assessing, and mitigating security vulnerabilities.
              </p>
            </div>
            <div className="wrapper_dangerosity">
              <DangerosityBar level={9} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
