import React from 'react'

export const Service = () => {
    var style = {
        width: "90px"
    }
    var style1 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeInUp;"
    }
    var style2 = {
        visibility: "visible; animation-delay: 0.5s; animation-name: zoomIn;"
    }
    var style2A= {
        visibility: "visible; animation-delay: 0.1s; animation-name: zoomIn;"
    }
    var style2B= {
        visibility: "visible; animation-delay: 0.3s; animation-name: zoomIn;"
    }
    var style2c= {
        visibility: "visible; animation-delay: 0.6s; animation-name: zoomIn;"
    }

    var style3 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeInUp;"
    }

    var style4 = {
        height: "250px"
    }

    var style5 = {
        height: "250px"
    }

    var style6 = {
        height: "48px"
    }

    var style7 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeIn"
    }
    var style8 = {
        visibility: "visible; animation-delay: 0.3s; animation-name: fadeInUp"
    }
    return (
        <div class="container-xxl bg-white p-0">

            <div class="container-xxl position-relative p-0">


                <div class="container-xxl py-5 bg-primary hero-header mb-5">
                    <div class="container my-5 py-5 px-lg-5">
                        <div class="row g-5 py-5">
                            <div class="col-12 text-center">
                                <h1 class="text-white animated zoomIn">Service</h1>
                                <hr class="bg-white mx-auto mt-0" style={style} />
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">Service</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             

            <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s" style={style1}>
                    <h6 class="position-relative d-inline text-primary ps-4">Our Services</h6>
                    <h2 class="mt-2">What Solutions We Provide are given below</h2>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s" style={style2A}>
                        <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div class="service-icon flex-shrink-0">
                                <i class="fa fa-home fa-2x"></i>
                            </div>
                            <h5 class="mb-3">Bug Optimization</h5>
                            <p>Bug optimization is a critical part of software development, as it helps ensure that the software is reliable, functional, and user-friendly.</p>
                            <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s" style={style2B}>
                        <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div class="service-icon flex-shrink-0">
                                <i class="fa fa-home fa-2x"></i>
                            </div>
                            <h5 class="mb-3">Bug Debugging</h5>
                            <p>Debugging is a critical part of software development, as it helps ensure that the software is reliable, functional, and free of errors. </p>
                            <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s" style={style2c}>
                        <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div class="service-icon flex-shrink-0">
                                <i class="fa fa-home fa-2x"></i>
                            </div>
                            <h5 class="mb-3">Bug Testing</h5>
                            <p>Once the bug is fixed, it needs to be tested to ensure that the fix works as expected and doesn't introduce any new issues.</p>
                            <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                   
                
                </div>
            </div>
        </div>







            <div class="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s" style={style7}>
                <div class="container py-5 px-lg-5">
                    <div class="row g-5">
                        <div class="col-md-6 col-lg-3">
                            <h5 class="text-white mb-4">Get In Touch</h5>
                            <p><i class="fa fa-map-marker-alt me-3"></i>B-51 Shital Society</p>
                        <p><i class="fa fa-phone-alt me-3"></i>7227991176</p>
                        <p><i class="fa fa-envelope me-3"></i>dhaval@gmail.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <h5 class="text-white mb-4">Popular Link</h5>
                            <a class="btn btn-link" href="">About Us</a>
                            <a class="btn btn-link" href="">Contact Us</a>
                            <a class="btn btn-link" href="">Privacy Policy</a>
                            <a class="btn btn-link" href="">Terms &amp; Condition</a>
                            <a class="btn btn-link" href="">Career</a>
                        </div>

                        <div class="col-md-6 col-lg-6">
                            <h5 class="text-white mb-4">Newsletter</h5>
                            <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                            <div class="position-relative w-100 mt-3">
                                <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={style6} />
                                <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container px-lg-5">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a class="border-bottom" href="#">Bug tracking</a>, All Right Reserved.

                                <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <div class="footer-menu">
                                    <a href="">Home</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
