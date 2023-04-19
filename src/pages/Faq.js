import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards and PayPal.",
        },
        {
            question: "How long will it take to receive my order?",
            answer:
                "Delivery times vary depending on your location and shipping method. Please refer to our shipping policy for more information.",
        },
        {
            question: "Can I return or exchange an item?",
            answer:
                "Yes, we have a flexible return and exchange policy. Please refer to our return policy for more information.",
        },
    ];

    return (
        <div className="faq-container">
            <h1>FAQ</h1>
            <div className="accordion">
                {faqData.map((data, index) => (
                    <div className="accordion-item" key={index}>
                        <div className="accordion-title" onClick={() => handleClick(index)}>
                            <h3>{data.question}</h3>
                            <span>{activeIndex === index ? "-" : "+"}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="accordion-content">
                                <p>{data.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
