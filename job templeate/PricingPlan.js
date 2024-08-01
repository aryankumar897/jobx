// PricingPlanSection.js

"use client"

const plans = [
    {
        title: 'Basic',
        price: '$9.99',
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    },
    {
        title: 'Standard',
        price: '$19.99',
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    },
    {
        title: 'Enterprise',
        price: '$49.99',
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    }
];

export default function PricingPlan() {
    return (
        <div className="pricingPlans">
            <span
                className="border-1 border rounded  p-2 text-lg "

            >Pricing Plans</span>
            <div className="planContainer m-5  ">
                {plans.map(plan => (
                    <div key={plan.title} className="plan border-1 border border-success">
                        <h3
                            className="border-1 border rounded text-white bg-info mb-3 "
                        >{plan.title}</h3>
                        <p>{plan.price}/month</p>
                        <ul>
                            {plan.features.map(feature => (
                                <li


                                    key={feature}>{feature}</li>
                            ))}
                        </ul>
                        <button className="choosePlanButton">Choose Plan</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


