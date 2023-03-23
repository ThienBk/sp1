import React from 'react';
import homeBanner from "../../accessts/img/a-02.jpg"

function Home(props) {
    return (
        <div className='container mt-5'>
            <h1 style={{paddingTop: '50px'}} className='text-center mt-5'>Thần dược Trần Xuân Vương</h1>
            <div className='mt-5'>
                <h3 className='text-center'></h3>
                <p>Trường Xuân Vương là một trong những sản phẩm tăng cường sinh lý nam giới được phát triển từ bác thuốc độc quyền của Bác sĩ, Lương y Nguyễn Hữu Trọng. Sản phẩm được bào chế từ các dược liệu quý, cải thiện sức khỏe tình dục nam giới chỉ sau 30 ngày. Vậy Trường Xuân 
                Vương có tốt không? bao nhiêu một hộp, mua ở đâu tốt. Theo dõi ngay bài viết sau của chúng tôi!</p>
            </div>
            <h3>Trần Xuân Vương</h3>
            <div className="container"><img className='w-100' src={homeBanner} alt="" /></div>
            <h3 className='text-center bg-dark text-white mt-5'><marquee scrollamount="10">Liên hệ với shop để được hỗ trợ mua hàng với giá ưu đãi</marquee></h3>
            <div className='text-center my-5'>Make by: @Thiện21</div>
        </div>
    );
}

export default Home;