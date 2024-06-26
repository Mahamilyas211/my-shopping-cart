import React from 'react'
import './../../../App.css';
import { MdAddCall } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";


const Contact = () => {
    const style = { color: "#b91c1c" }

    return (
        <>
            <section className='bg-color'>

                <div class="section-header">
                    <div class="container">
                        <h2 >Contact Us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>

                <div class="container">
                    <div class="row">

                        <div class="contact-info">
                            <div class="contact-info-item">
                                <div class="contact-info-icon">
                                    <IoIosHome style={style} />
                                </div>

                                <div class="contact-info-content">
                                    <h4>Address</h4>
                                    <p>4671 Sugar Camp Road,
                                        Owatonna, Minnesota,
                                        55060</p>
                                </div>
                            </div>

                            <div class="contact-info-item">
                                <div class="contact-info-icon">
                                    <MdAddCall style={style} />
                                </div>

                                <div class="contact-info-content">
                                    <h4>Phone</h4>
                                    <p>571-457-2321</p>
                                </div>
                            </div>

                            <div class="contact-info-item">
                                <div class="contact-info-icon">
                                    <FaMailBulk style={style} />
                                </div>

                                <div class="contact-info-content">
                                    <h4>Email</h4>
                                    <p>ntamerrwael@mfano.ga</p>
                                </div>
                            </div>
                        </div>

                        <div class="contact-form">
                            <form action="" id="contact-form">
                                <h2 className='h2'>Send Message</h2>
                                <div class="input-box">
                                    <input type="text" required="true" name='' />
                                    <span>Full Name</span>
                                </div>

                                <div class="input-box">
                                    <input type="email" required="true" name='' />
                                    <span>Email</span>
                                </div>

                                <div class="input-box">
                                    <textarea required="true" name=""></textarea>
                                    <span>Type your Message...</span>
                                </div>

                                <div class="input-box">
                                    <input type="submit" value='Send' name='' />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact