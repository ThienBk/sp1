import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import txv1 from '../../accessts/img/txv1.png';
import txv2 from '../../accessts/img/txv/z2562372223133_bc709e1b488728e20061ff8ed1856e5e-removebg-preview.png';
import txv3 from '../../accessts/img/txv/truong-xuan-vuong.png';

function Introduct(props) {
    return (
        <div>
            <h1 className='text-center'>GIới thiệu sản phẩm</h1>
            <h1 className='text-center mt-5'>Trần Xuân Vương</h1>
            <div className='container content'>
                <h3><strong>1. Trường Xuân Vương là thuốc gì?</strong></h3>
                <img className='w-50 d-block mx-auto' src={txv2} alt="" />
                <p>Trường Xuân Vương không phải là thuốc mà là thực phẩm chức năng tăng cường sinh lý nam giới. Hỗ trợ cải thiện suy giảm chức năng tình dục xuất tinh sớm, di mộng tinh, rối loạn cương dương và có chất lượng đời sống tình dục thấp.</p>
                <h3><strong>2. 1 hộp Trường Xuân Vương có bao nhiêu viên?</strong></h3>
                Một hộp Trường Xuân Vương có 30 viên nang, thành phần hoàn toàn từ các dược liệu tự nhiên SĐK: 1185/2020/ĐKSP
                <img src={txv1} alt="" className='w-50 d-block mx-auto' />
                Bộ Y tế cấp phép lưu hành: 1185/2020/ATTP-TCCS. <br />
                Nhà sản xuất: Công ty cổ phần phát triển dược Vesta.<br />
                Đơn vị phân phối: Công ty cổ phần dược phẩm Phát Đạt.<br />
                <h3><strong>3. Thành phần Trường Xuân Vương chính hãng</strong></h3>
                <p>TPCN Trường Xuân Vương là sản phẩm được phát triển từ bài thuốc của  Bác sĩ, <Link to="https://vietnamnet.vn/bi-quyet-duy-tri-hanh-phuc-cua-cu-ong-92-tuoi-lay-nguoi-vo-kem-53-tuoi-624453.html">Lương y Nguyễn Hữu Trọng </Link>
                với công thức chứa 100% nguyên liệu tự nhiên. Tất cả các dược liệu được sử dụng trong sản phẩm đã được kiểm chứng về hàm lượng dinh dưỡng và dược tính trước khi đưa vào dây chuyền sản xuất.</p>
                <ul>
                    <li>Chiết xuất đỗ trọng 1800mg – Đỗ trọng có vị cay, tác dụng bổ trung, mạnh cường gân cốt, tráng dương, ôn thận. Không chỉ dùng trong y học cổ truyền, đỗ trọng đã được khoa học nghiên cứu, hạ huyết áp, tăng cường chức năng tuyến thượng thận và cải thiện sức khỏe.</li>
                    <li>Chiết xuất dâm dương hoắc 1700mg – hỗ trợ sinh lý của cả nam và nữ. Nghiên cứu khoa học cho thấy chúng có tác dụng, nồng độ testosterone, cải thiện đời sống tình dục, tăng số lượng và chất lượng tinh trùng.</li>
                    <li>Chiết xuất ba kích 110mg – chứa hàm lượng vitamin, khoáng chất và chất chống oxy hóa cao, cải thiện tình trạng mệt mỏi, suy nhược, nam giới bền bỉ hơn trong sinh hoạt vợ chồng.</li>
                    <li>Chiết xuất câu kỷ tử 700mg – Bồi bổ sức khỏe, sinh tinh, cường dương, tăng hiệu quả miễn dịch, chống oxy hóa, bảo vệ tim mạch, làm chậm quá trình lão hóa.</li>
                    <li>Chiết xuất thỏ ty tử 700mg – Theo Đông y, thỏ ty tử có tác dụng dưỡng can, bổ thận, tráng dương, kiện cốt, cường cân, minh mục,… Y học hiện đại thì thấy đây là thảo dược chứa vitamin A, lecithin, quercetin, carotenoid, glycoside có tác dụng bồi bổ và tăng cường sinh lý nam.</li>
                    <li>Chiết xuất tỏa dương 600mg – thuốc có tác dụng ích tinh, sinh huyết và bổ thận, cải thiện chứng suy nhược cơ thể, ốm yếu, suy giảm khả năng tình dục do thận hư.</li>
                    <li>Chiết xuất sâm cau 500mg – Thành phần sâm cau có nhiều bài thuốc chữa đau nhức xương khớp, cơ thể suy nhược, suy giảm khả năng tình dục.</li>
                </ul>
            </div>
            <div className="price text-center mt-5">
                <h4>Giá sản phẩm chỉ: <span className='text-danger fw-bold'>790.000 ₫</span></h4>
                <img className='mt-5 w-75' src={txv3} alt="" />
            </div>
            <h3 className='text-center bg-dark text-white mt-5'>Liên hệ với shop để được hỗ trợ mua hàng với giá ưu đãi</h3>
        </div>
    );
}

export default Introduct;