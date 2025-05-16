export const Footer = () => {
  return (
    <footer className="footer pt-16 xl:pt-[150px] font-semibold text-white">
      <div className="container mx-auto pb-12 xl:pb-[100px] car-bottom">
        <div className="flex flex-col lg:flex-row gap-x-5 gap-y-10">
          <div className="footer__item flex-1">
            <p className="mb-[50px] text-2xl text-primary">
              Ready to start with Rento?
            </p>
            <div className="flex flex-col gap-y-3 mb-10">
              <div className="flex items-center gap-x-[6px]">
                <i className="ri-map-pin-fill text-[24px] text-assent "></i>
                <div>123 Alering, Milano, Ny</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <i className="ri-mail-fill text-[24px] text-assent"></i>
                <div>Insove@email.com</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <i className="ri-phone-fill text-[24px] text-assent "></i>
                <div>(+123) 365 9876</div>
              </div>
            </div>
            <div className="flex gap-[14px] text-[30px]">
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-assent  hover:text-assent cursor-pointer transition-all">
                <i className="ri-facebook-circle-fill"></i>
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-assent   hover:text-assent cursor-pointer transition-all">
                <i className="ri-instagram-fill"></i>
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-assent   hover:text-assent cursor-pointer transition-all">
                <i className="ri-whatsapp-fill"></i>
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-assent   hover:text-assent cursor-pointer transition-all">
                <i className="ri-pinterest-fill"></i>
              </div>
            </div>
          </div>
          <div className="footer__item flex-1">
            <h4 className="text-[20px] xl:text-[26px] font-semibold capitalize text-primary mb-5">
              Quick Links
            </h4>
            <div className="flex gap-x-5">
              <ul className="flex-1 flex flex-col gap-y-5">
                <li>
                  <a href="#" className="hover:text-assent transition-all">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-assent transition-all">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-assent transition-all">
                    Department
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-assent transition-all">
                    services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-assent transition-all">
                    Blog
                  </a>
                </li>
              </ul>
              <ul className="flex-1 flex flex-col gap-y-5">
                <li>
                  <a href="#" className="hover:text-assent transition-all">
                    Our Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-assent transition-all">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-assent transition-all">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-assent transition-all">
                    Faqs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-assent transition-all">
                    Privecy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__item flex-1">
            <h4 className="text-[20px] xl:text-[26px] font-semibold capitalize text-primary mb-5">
              Opening Hours
            </h4>
            <div className="flex flex-col  gap-5">
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Monday - Thursday</div>
                  <div className="text-assent">8:00 Am - 6:00 Pm</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Monday - Thursday</div>
                  <div className="text-assent">8:00 Am - 6:00 Pm</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Monday - Thursday</div>
                  <div className="text-assent">8:00 Am - 6:00 Pm</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Monday - Thursday</div>
                  <div className="text-assent">8:00 Am - 6:00 Pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[30px] border-t text-center text-base">
        &copy; 2025 Rento - All Rights Reserved.
      </div>
    </footer>
  );
};
