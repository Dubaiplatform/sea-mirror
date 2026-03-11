"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { countriesList } from "../country-list";

export default function ContactForm() {
  const countryRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [countrySearch, setCountrySearch] = useState("");
  const [isBedroomOpen, setIsBedroomOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+971",
    phone: "",
    bedrooms: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState({
    code: "+971",
    flag: "🇦🇪",
    name: "UAE",
  });

  const bedroomOptions = [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "4 Bedrooms",
  ];

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, "");

    if (!cleanPhone) {
      return "Mobile number is required";
    }

    if (cleanPhone.length < 8) {
      return "Mobile number must be at least 8 digits";
    }

    if (cleanPhone.length > 10) {
      return "Mobile number must not exceed 10 digits";
    }

    return "";
  };
  const validateEmail = (email: any) => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email format";
    }
    return "";
  };

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 10);

    setFormData({ ...formData, phone: digitsOnly });

    if (errors.phone) {
      setErrors({ ...errors, phone: "" });
    }
  };

  const handleSubmit = async () => {
    const newErrors = {
      name: !formData.name ? "Name is required" : "",
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.countryCode + formData.phone,
      bedrooms: formData?.bedrooms,
      source: "seamirror.co",
    };

    try {
      const res = await fetch(
        "https://hooks.zapier.com/hooks/catch/15977350/uqpeg0q/",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(payload),
        },
      );

      // alert("Form submitted successfully");
      setFormData({
        name: "",
        email: "",
        countryCode: "+971",
        phone: "",
        bedrooms: "",
      });
      setSelectedCountry({
        code: "+971",
        flag: "🇦🇪",
        name: "UAE",
      });
      // setShowThankYou(true);
      router.push("/thank-you");
    } catch (error) {
      // alert("Submission failed");
      setFormData({
        name: "",
        email: "",
        countryCode: "+971",
        phone: "",
        bedrooms: "",
      });
      setSelectedCountry({
        code: "+971",
        flag: "🇦🇪",
        name: "UAE",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    };

    if (isCountryOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCountryOpen]);

  const filteredCountries = countriesList.filter((country) =>
    `${country.name} ${country.code}`
      .toLowerCase()
      .includes(countrySearch.toLowerCase()),
  );

  return (
    <div
      id="contact-form"
      className="min-h-screen bg-white flex items-center justify-center md:p-4"
    >
      <div className="w-full max-w-2xl bg-white p-8 sm:p-8">
        <h2 className="text-3xl sm:text-4xl font-light text-[#2a2a2a] mb-8 text-center">
          Register Your Interest
        </h2>

        <div className="text-black text-center mb-8">
          Your information will be used to respond to your query and send you
          information about this development.
        </div>

        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-[#2a2a2a] pb-3 text-base sm:text-lg text-[#2a2a2a] placeholder:text-[#666] focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              placeholder="Email"
              className="w-full bg-transparent border-b border-[#2a2a2a] pb-3 text-base sm:text-lg text-[#2a2a2a] placeholder:text-[#666] focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <div
              ref={countryRef}
              className="flex items-center border-b border-[#2a2a2a] pb-3 relative"
            >
              <button
                type="button"
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center gap-2 pr-3 border-r border-[#ccc] text-[#2a2a2a]"
              >
                <span className="text-xl">{selectedCountry.flag}</span>
                <span>{selectedCountry.code}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isCountryOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border text-black border-[#ccc] shadow-lg z-50">
                  {/* Search */}
                  <div className="p-2 border-b border-[#e5e5e5] sticky top-0 bg-white z-10">
                    <input
                      type="text"
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      placeholder="Search country or code"
                      className="w-full px-3 py-2 text-sm border border-[#ccc] focus:outline-none"
                    />
                  </div>

                  {/* List */}
                  <div className="max-h-52 overflow-y-auto">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country);
                            setFormData({
                              ...formData,
                              countryCode: country.code,
                            });
                            setIsCountryOpen(false);
                            setCountrySearch(""); // reset search
                          }}
                          className="flex items-center gap-3 w-full px-4 py-3 hover:bg-[#f5f5f0] text-left text-sm"
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span>{country.name}</span>
                          <span className="ml-auto text-gray-500">
                            {country.code}
                          </span>
                        </button>
                      ))
                    ) : (
                      <p className="px-4 py-3 text-sm text-gray-500">
                        No countries found
                      </p>
                    )}
                  </div>
                </div>
              )}

              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="Phone Number"
                className="flex-1 bg-transparent pl-4 text-base sm:text-lg text-[#2a2a2a] placeholder:text-[#666] focus:outline-none w-full"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Bedrooms */}
          {/* <div className="relative">
            <button
              type="button"
              onClick={() => setIsBedroomOpen(!isBedroomOpen)}
              className="w-full flex items-center justify-between border-b border-[#2a2a2a] pb-3 text-base sm:text-lg text-[#2a2a2a]"
            >
              <span className={!formData?.bedrooms ? "text-[#666]" : ""}>
                {formData?.bedrooms || "How many Bedrooms"}
              </span>
              <ChevronDown className="w-5 h-5" />
            </button>

            {isBedroomOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-[#ccc] text-black shadow-lg z-50">
                {bedroomOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, bedrooms: option });
                      setIsBedroomOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-[#f5f5f0] text-sm"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div> */}

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            type="button"
            className="w-full bg-[#2a2a2a] text-white py-4  text-lg font-medium hover:bg-[#1a1a1a] transition-colors mt-8"
          >
            Submit
          </motion.button>
        </div>

        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white  md:w-[30%] sm:w-[50%] w-[90%] p-8 text-center shadow-2xl"
            >
              <h3 className="text-2xl font-light text-[#2a2a2a] mb-4">
                Thank You!
              </h3>

              <p className="text-[#555] text-base mb-8">
                Your details have been submitted successfully. Our team will
                contact you shortly.
              </p>

              <button
                onClick={() => setShowThankYou(false)}
                className="w-full bg-[#2a2a2a] text-white py-3 text-base font-medium hover:bg-[#1a1a1a] transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
