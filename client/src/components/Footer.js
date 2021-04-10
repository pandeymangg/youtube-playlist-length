import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer" >
            <div className="footer-container" >
                <div>
                    <h5 style={{ fontWeight: "normal" }} >Copyright &copy; {new Date().getFullYear()}</h5>
                </div>
                <div >
                    <h5 style={{ fontWeight: "normal" }}>
                        Made by 
                        <span>
                            <a href="https://github.com/anshuman9999" 
                            style={{ color: "#2691d9" }} 
                            target="_blank"
                            rel="noreferrer"
                            > Anshuman Pandey</a>
                        </span>
                    </h5>
                </div>

            </div>
        </footer>
    );
};

export default Footer;