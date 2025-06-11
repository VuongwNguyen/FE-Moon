import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ShootingStar = ({ delay, duration, x, y }) => {
  const starRef = useRef(null);

  useEffect(() => {
    const star = starRef.current;

    const tl = gsap.timeline({
      repeat: -1,
      delay: delay,
    });

    tl.to(star, {
      x: "+=200",
      y: "+=200",
      opacity: [0, 1, 0],
      duration: duration,
      ease: "power1.in",
    });

    return () => {
      tl.kill();
    };
  }, [delay, duration]);

  return (
    <div ref={starRef} className="absolute w-1 h-1" style={{ left: x, top: y }}>
      <svg viewBox="0 0 24 24" className="w-full h-full text-white">
        <path
          fill="currentColor"
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        />
      </svg>
    </div>
  );
};

const Sparkle = ({ delay, duration, x, y }) => {
  const sparkleRef = useRef(null);

  useEffect(() => {
    const sparkle = sparkleRef.current;

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      delay: delay,
    });

    tl.to(sparkle, {
      scale: [0, 1.5, 0],
      opacity: [0, 1, 0],
      duration: duration,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [delay, duration]);

  return (
    <div
      ref={sparkleRef}
      className="absolute w-4 h-4"
      style={{ left: x, top: y, zIndex: 20 }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full text-yellow-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]"
      >
        <path
          fill="currentColor"
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        />
      </svg>
    </div>
  );
};

const FloatingHeart = ({ delay, duration, x, y }) => {
  const heartRef = useRef(null);

  useEffect(() => {
    const heart = heartRef.current;

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      delay: delay,
    });

    tl.to(heart, {
      y: "+=20",
      x: "+=10",
      rotation: "+=15",
      duration: duration / 2,
      ease: "sine.inOut",
    }).to(heart, {
      y: "-=20",
      x: "-=10",
      rotation: "-=15",
      duration: duration / 2,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [delay, duration]);

  return (
    <motion.div
      ref={heartRef}
      className="absolute text-pink-300 opacity-30"
      initial={{ y: "100%", x: x, opacity: 0 }}
      animate={{
        y: y,
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </motion.div>
  );
};

const FloatingElement = ({ className, delay, duration }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      delay: delay,
    });

    tl.to(element, {
      y: "+=15",
      x: "+=8",
      rotation: "+=10",
      duration: duration / 2,
      ease: "sine.inOut",
    }).to(element, {
      y: "-=15",
      x: "-=8",
      rotation: "-=10",
      duration: duration / 2,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [delay, duration]);

  return <div ref={elementRef} className={className} />;
};

export default function Letter() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const hearts = [
    { delay: 0, duration: 8, x: "10%", y: "-100%" },
    { delay: 2, duration: 10, x: "30%", y: "-100%" },
    { delay: 4, duration: 9, x: "50%", y: "-100%" },
    { delay: 1, duration: 11, x: "70%", y: "-100%" },
    { delay: 3, duration: 7, x: "90%", y: "-100%" },
    { delay: 5, duration: 12, x: "20%", y: "-100%" },
    { delay: 2.5, duration: 9, x: "40%", y: "-100%" },
    { delay: 4.5, duration: 10, x: "60%", y: "-100%" },
    { delay: 1.5, duration: 8, x: "80%", y: "-100%" },
  ];

  const sparkles = [
    { delay: 0, duration: 2, x: "15%", y: "25%" },
    { delay: 0.5, duration: 2.5, x: "80%", y: "40%" },
    { delay: 1, duration: 2, x: "40%", y: "70%" },
    { delay: 1.5, duration: 2.5, x: "60%", y: "20%" },
    { delay: 2, duration: 2, x: "30%", y: "60%" },
    { delay: 2.5, duration: 2.5, x: "70%", y: "50%" },
    { delay: 1.2, duration: 2.2, x: "55%", y: "35%" },
    { delay: 0.8, duration: 2.1, x: "25%", y: "55%" },
    { delay: 1.7, duration: 2.3, x: "65%", y: "65%" },
    { delay: 2.2, duration: 2.4, x: "85%", y: "30%" },
  ];

  const shootingStars = [
    { delay: 0, duration: 1.5, x: "10%", y: "10%" },
    { delay: 3, duration: 1.5, x: "30%", y: "20%" },
    { delay: 6, duration: 1.5, x: "50%", y: "15%" },
    { delay: 9, duration: 1.5, x: "70%", y: "25%" },
  ];

  return (
    <div className="flex flex-col items-center w-[80vw] mx-auto pt-8 md:pt-12">
      <motion.div
        className="relative w-full bg-white shadow-2xl cursor-pointer rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          rotateY: isOpen ? 180 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
        }}
      >
        {/* Front of the letter */}
        <motion.div
          className={`w-full bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 rounded-lg ${!isOpen ? 'relative' : 'absolute inset-0'}`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
            WebkitTransform: "rotateY(0deg)",
          }}
        >
          <div className="p-8">
            <div className="border-4 border-dashed border-pink-300 rounded-lg p-6 py-20 flex flex-col items-center justify-center bg-white/90 relative">
              {/* Shooting Stars */}
              {shootingStars.map((star, index) => (
                <ShootingStar key={index} {...star} />
              ))}

              {/* Sparkles */}
              {sparkles.map((sparkle, index) => (
                <Sparkle key={index} {...sparkle} />
              ))}

              {/* Floating Hearts */}
              {hearts.map((heart, index) => (
                <FloatingHeart key={index} {...heart} />
              ))}

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <FloatingElement
                  className="absolute top-4 left-4 w-20 h-20 border-2 border-pink-200 rounded-lg rotate-12"
                  delay={0}
                  duration={6}
                />
                <FloatingElement
                  className="absolute bottom-4 right-4 w-20 h-20 border-2 border-blue-200 rounded-lg -rotate-12"
                  delay={2}
                  duration={8}
                />
                <FloatingElement
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-purple-200 rounded-full"
                  delay={1}
                  duration={7}
                />
              </div>

              <div className="text-center space-y-8 relative z-10">
                <motion.h2
                  className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Click to Open
                </motion.h2>
                <motion.div
                  className="w-32 h-32 mx-auto border-4 border-pink-300 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 shadow-lg"
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                    boxShadow: isHovered
                      ? "0 0 20px rgba(236, 72, 153, 0.5)"
                      : "0 0 10px rgba(236, 72, 153, 0.3)",
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>
                <p className="text-2xl text-gray-600 font-medium">
                  Your Special Letter
                </p>
                <div className="flex justify-center space-x-4">
                  <motion.div
                    className="w-3 h-3 bg-pink-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: 0,
                    }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-purple-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: 0.4,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back of the letter (content) */}
        <motion.div
          className={`w-full p-8 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 rounded-lg ${isOpen ? 'relative' : 'absolute inset-0'}`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            WebkitTransform: "rotateY(180deg)",
            visibility: isOpen ? 'visible' : 'hidden',
          }}
        >
          <div className="border-4 border-dashed border-pink-300 rounded-lg p-8 py-12 bg-white/90 relative">
            {/* Shooting Stars */}
            {shootingStars.map((star, index) => (
              <ShootingStar key={index} {...star} />
            ))}

            {/* Sparkles */}
            {sparkles.map((sparkle, index) => (
              <Sparkle key={index} {...sparkle} />
            ))}

            {/* Floating Hearts */}
            {hearts.map((heart, index) => (
              <FloatingHeart key={index} {...heart} />
            ))}

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <FloatingElement
                className="absolute top-4 right-4 w-20 h-20 border-2 border-pink-200 rounded-lg rotate-12"
                delay={1}
                duration={7}
              />
              <FloatingElement
                className="absolute bottom-4 left-4 w-20 h-20 border-2 border-blue-200 rounded-lg -rotate-12"
                delay={3}
                duration={9}
              />
              <FloatingElement
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-purple-200 rounded-full"
                delay={2}
                duration={8}
              />
            </div>

            <div className="relative z-10">
              <motion.h2
                className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Gửi Moon,
              </motion.h2>
              <motion.div
                className="space-y-6 text-lg text-gray-700 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="leading-relaxed italic text-gray-600 mb-4">
                  Hôm nay không có dịp gì đặc biệt. Không sinh nhật, không kỷ
                  niệm. Chỉ là một ngày bình thường, nhưng em muốn làm một điều
                  nhỏ, là viết cho chị vài dòng thật lòng và gửi kèm theo một
                  album nhỏ em đã chuẩn bị.
                </div>

                <div className="leading-relaxed mb-4">
                  Em không phải là một người thân trong gia đình chị. Em chỉ là
                  một người theo dõi, một người xem, nhưng lại cảm thấy có duyên
                  và có lòng để thương quý một người con gái như chị.
                </div>

                <div className="leading-relaxed mb-4">
                  Chị là một idol livestream, là hình ảnh rạng rỡ và chuyên
                  nghiệp trước ống kính, là người mà ai nhìn vào cũng nghĩ "chị
                  chắc hạnh phúc và tự tin lắm". Nhưng theo thời gian dõi theo
                  chị, em cảm nhận được phía sau sự tỏa sáng ấy là rất nhiều cố
                  gắng, là những đêm thức khuya, là những khoảnh khắc mệt mỏi mà
                  chị chẳng thể hiện ra ngoài.
                </div>

                <div className="leading-relaxed mb-4">
                  Chị đã luôn cố gắng thật nhiều, để mang lại năng lượng tích
                  cực, để lan tỏa niềm vui, để khiến người khác cảm thấy được
                  đồng hành. Và dù chẳng ai bắt buộc chị phải làm như thế, chị
                  vẫn luôn chọn cách sống tử tế và kiên cường. Điều đó, với em,
                  thật đáng quý.
                </div>

                <div className="leading-relaxed mb-4">
                  Album nhỏ em làm tặng chị có thể không quá xuất sắc, nhưng
                  từng hình ảnh, từng dòng chữ là tấm lòng chân thành. Như một
                  lời nhắn gửi rằng: Chị không hề đơn độc trên hành trình của
                  mình. Có những người, như em, vẫn đang âm thầm dõi theo, trân
                  trọng, và mong chị luôn được sống thật với chính mình.
                </div>

                <div className="leading-relaxed mb-4">
                  Nếu một ngày nào đó chị cảm thấy yếu lòng, hãy nhớ rằng không
                  phải tất cả tình cảm đều cần ồn ào để tồn tại. Có những sự yêu
                  mến đủ sâu, dù im lặng, vẫn là một điểm tựa vững chắc để chị
                  tiếp tục vững bước.
                </div>

                <div className="leading-relaxed mb-4">
                  Cảm ơn chị đã cho em, và rất nhiều người khác, một lý do để
                  mỉm cười mỗi ngày.
                </div>

                <div className="leading-relaxed mb-4">
                  Chúc chị luôn rực rỡ như cách chị vẫn sống. Và nếu được, hãy
                  để mình cũng được đồng hành, dù chỉ một phần rất nhỏ, trong
                  chặng đường phía trước của chị.
                </div>

                <div className="mt-12 space-y-2 text-right">
                  <div className="text-xl italic">Thương mến,</div>
                  <div className="text-2xl font-semibold text-pink-600">
                    Yinnz
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
