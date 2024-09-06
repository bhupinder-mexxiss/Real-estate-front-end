import React from "react";
import blogImg from "../../assets/images/blogImg.png";
import house1 from "../../assets/images/house1.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BlogDetail = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="pb-20 pt-10 md:pt-14">
      <div className="container mx-auto">
        <div className="lg:flex">
          {/* Detail */}
          <div className="lg:w-[65%] xl:w-[70%] lg:border-r border-border1 lg:pr-10">
            <div className="mb-14">
              <h4 className="text-2xl sm:text-3xl  xl:text-[38px] font-medium text-text1 mb-3.5">
                Know More About Dubai Land Department Awareness Service
              </h4>
              <p className="text-base sm:text-xl text-text2">
                Posted on <span>14 August, 2024</span>
              </p>
            </div>
            <div>
              <figure className="mb-10">
                <img src={blogImg} alt="" width="850" className="max-w-full" />
              </figure>
              <p className="text-base sm:text-lg text-text1 mb-5 sm:mb-7">
                Building a product is something challenging. Putting ourselves
                in the user's shoes makes us uncover user’s frustrations and
                identify their problems, which really motivates us to generate
                ideas and build something for them. Something to meet their
                needs.
              </p>
              <p className="text-base sm:text-lg text-text1 mb-5 sm:mb-7">
                And we want to believe that our solution will be a rock star
                that users won't stop using. But by the time we finish it, we'll
                have a hypothesis. A candidate to a solution. Even the best
                usability experts won't be able to work on a perfect solution
                with just a single attempt.
              </p>
              <p className="text-base sm:text-lg text-text1 mb-7 sm:mb-10">
                And we want to believe that our solution will be a rock star
                that users won't stop using. But by the time we finish it, we'll
                have a hypothesis. A candidate to a solution. Even the best
                usability experts won't be able to work on a perfect solution
                with just a single attempt.
              </p>
              <h6 className="text-xl sm:text-[28px] font-medium mb-4 sm:mb-7">
                From Prototype to Iteration
              </h6>
              <p className="text-base sm:text-lg text-text1 mb-7 sm:mb-10">
                Iterative design can be a huge help at any phase of the product
                lifecycle. It will allow you to incrementally refine your
                product based on users' feedback, so you'll know that you are
                moving in the right direction. So, this iterative approach will
                be the most cost-effective one, either on an initial
                go-to-market phase or if your product has already been launched
                and you are looking to improve it. The earlier you implement it,
                the more effective and user-oriented your growth will be.
              </p>
              <h6 className="text-xl sm:text-[28px] font-medium mb-4 sm:mb-7">
                Prototype → Test
              </h6>
              <p className="text-base sm:text-lg text-text1 mb-7 sm:mb-10">
                Once you have your prototype ready to be tested, make sure you
                find a considerable amount of users to test it. Take notes,
                identify the problems they had and listen to their thoughts and
                requests. Then, move forward to the next iteration of your
                designs. You should then test it again to ensure that the
                adjustments made solved the problems identified.
              </p>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="lg:w-[35%] xl:w-[30%] lg:pl-10 mt-20 lg:mt-0">
            <h5 className="text-[28px] font-medium text-text1 mb-8">
              Recent Posts
            </h5>
            <div className="hidden lg:block">
              <div className="rounded-[20px] overflow-hidden mb-8">
                <Link>
                  <img
                    src={house1}
                    alt=""
                    className="w-full max-h-[192px] object-cover"
                  />
                </Link>
                <div className="px-4 pt-4 pb-6 bg-white">
                  <span className="text-sm text-text2 ">June 25, 2024</span>
                  <Link className="text-lg text-text1 mt-3 inline-block font-medium hover:text-primary duration-300">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </Link>
                </div>
              </div>
              <div className="rounded-[20px] overflow-hidden mb-8">
                <Link>
                  <img
                    src={house1}
                    alt=""
                    className="w-full max-h-[192px] object-cover"
                  />
                </Link>
                <div className="px-4 pt-4 pb-6 bg-white">
                  <span className="text-sm text-text2 ">June 25, 2024</span>
                  <Link className="text-lg text-text1 mt-3 inline-block font-medium hover:text-primary duration-300">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </Link>
                </div>
              </div>
              <div className="rounded-[20px] overflow-hidden mb-8">
                <Link>
                  <img
                    src={house1}
                    alt=""
                    className="w-full max-h-[192px] object-cover"
                  />
                </Link>
                <div className="px-4 pt-4 pb-6 bg-white">
                  <span className="text-sm text-text2 ">June 25, 2024</span>
                  <Link className="text-lg text-text1 mt-3 inline-block font-medium hover:text-primary duration-300">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </Link>
                </div>
              </div>
              <div className="rounded-[20px] overflow-hidden mb-8">
                <Link>
                  <img
                    src={house1}
                    alt=""
                    className="w-full max-h-[192px] object-cover"
                  />
                </Link>
                <div className="px-4 pt-4 pb-6 bg-white">
                  <span className="text-sm text-text2 ">June 25, 2024</span>
                  <Link className="text-lg text-text1 mt-3 inline-block font-medium hover:text-primary duration-300">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:hidden">
              <Slider {...settings}>
                <div className="px-4">
                  <div className="rounded-[20px] overflow-hidden">
                    <Link>
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[192px] object-cover"
                      />
                    </Link>
                    <div className="px-4 pt-4 pb-6 bg-white">
                      <span className="text-sm text-text2 ">June 25, 2024</span>
                      <Link className="text-lg text-text1 mt-3 inline-block font-medium hover:text-primary duration-300">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="rounded-[20px] overflow-hidden">
                    <Link>
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[192px] object-cover"
                      />
                    </Link>
                    <div className="px-4 pt-4 pb-6 bg-white">
                      <span className="text-sm text-text2 ">June 25, 2024</span>
                      <Link className="text-lg text-text1 mt-3 inline-block font-medium hover:text-primary duration-300">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="rounded-[20px] overflow-hidden">
                    <Link>
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[192px] object-cover"
                      />
                    </Link>
                    <div className="px-4 pt-4 pb-6 bg-white">
                      <span className="text-sm text-text2 ">June 25, 2024</span>
                      <Link className="text-lg text-text1 mt-3 inline-block font-medium hover:text-primary duration-300">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="rounded-[20px] overflow-hidden">
                    <Link>
                      <img
                        src={house1}
                        alt=""
                        className="w-full max-h-[192px] object-cover"
                      />
                    </Link>
                    <div className="px-4 pt-4 pb-6 bg-white">
                      <span className="text-sm text-text2 ">June 25, 2024</span>
                      <Link className="text-lg text-text1 mt-3 inline-block font-medium hover:text-primary duration-300">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit.
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
