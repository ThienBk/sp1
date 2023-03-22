import React from 'react';
import txv1 from '../../accessts/img/txv1.png';

function Introduct(props) {
    return (
        <div>
            <h1 className='text-center'>GIới thiệu sản phẩm</h1>
            <h2 className='text-center mt-5'>Trần Xuân Vương</h2>
            <div className='container content'>
                <strong>1. Trường Xuân Vương là thuốc gì?</strong>
                <p>Trường Xuân Vương không phải là thuốc mà là thực phẩm chức năng tăng cường sinh lý nam giới. Hỗ trợ cải thiện suy giảm chức năng tình dục xuất tinh sớm, di mộng tinh, rối loạn cương dương và có chất lượng đời sống tình dục thấp.</p>
                <strong>2. 1 hộp Trường Xuân Vương có bao nhiêu viên?</strong>
                Một hộp Trường Xuân Vương có 30 viên nang, thành phần hoàn toàn từ các dược liệu tự nhiên SĐK: 1185/2020/ĐKSP

                Bộ Y tế cấp phép lưu hành: 1185/2020/ATTP-TCCS.
                Nhà sản xuất: Công ty cổ phần phát triển dược Vesta.
                Đơn vị phân phối: Công ty cổ phần dược phẩm Phát Đạt.
            </div>
            <div className="price text-center mt-5">
                <h4>Giá sản phẩm chỉ: <span className='text-danger fw-bold'>300.000 ₫</span></h4>
            </div>
            <h3 className='text-center bg-dark text-white mt-5'>Liên hệ với shop để được hỗ trợ mua hàng với giá ưu đãi</h3>
        </div>
    );
}

export default Introduct;