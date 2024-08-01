"use client"
const PaymentFailed = () => {

    const containerStyle = {
        marginTop: '50px',
    };

    const animatedBoxStyle = {
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        animation: 'fadeInUp 1s ease-in-out',
    };

    const crossmarkStyle = {
        fontSize: '4rem',
        color: 'red',
        marginTop: '20px',
        animation: 'shake 1s ease-in-out infinite',
    };

    return (
        <div className="container" style={containerStyle}>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 text-center">
                    <div style={animatedBoxStyle}>
                        <h1 className="display-4">Payment Failed</h1>
                        <p className="lead">Unfortunately, your payment was not successful. Please try again.</p>
                        <div style={crossmarkStyle}>
                            ✘
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shake {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(0);
          }
          40% {
            transform: translateX(-10px);
          }
          60% {
            transform: translateX(10px);
          }
        }
      `}</style>
        </div>
    );
};

export default PaymentFailed;
