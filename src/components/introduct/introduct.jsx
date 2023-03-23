import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import txv1 from '../../accessts/img/txv1.png';
import txv2 from '../../accessts/img/txv/z2562372223133_bc709e1b488728e20061ff8ed1856e5e-removebg-preview.png';
import txv3 from '../../accessts/img/txv/truong-xuan-vuong.png';
import txv4 from '../../accessts/img/txv/pngnew8.png';
import txv5 from '../../accessts/img/txv/ai-su-dung-truong-xuan-vuong.jpg';

function Introduct(props) {
    return (
        <div>
            <h1 className='text-center mt-4'>Giới thiệu sản phẩm</h1>
            <div className='container content mt-5'>
                <h3><strong>1. Trường Xuân Vương là thuốc gì?</strong></h3>
                <img className='w-50 d-block mx-auto' src={txv2} alt="" />
                <p>Trường Xuân Vương không phải là thuốc mà là thực phẩm chức năng tăng cường sinh lý nam giới. Hỗ trợ cải thiện suy giảm chức năng tình dục xuất tinh sớm, di mộng tinh, rối loạn cương dương và có chất lượng đời sống tình dục thấp.</p>
                <h3><strong>2. 1 hộp Trường Xuân Vương có bao nhiêu viên?</strong></h3>
                Một hộp Trường Xuân Vương có 30 viên nang, thành phần hoàn toàn từ các dược liệu tự nhiên<br /> SĐK: 1185/2020/ĐKSP<br />
                Bộ Y tế cấp phép lưu hành: 1185/2020/ATTP-TCCS. <br />
                Nhà sản xuất: Công ty cổ phần phát triển dược Vesta.<br />
                Đơn vị phân phối: Công ty cổ phần dược phẩm Phát Đạt.<br />
                <img src={txv1} alt="" className='w-50 d-block mx-auto' />
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
                <strong>Xem thêm: Viên ngậm Tengsu tăng cường sinh lý có tốt không hay lừa đảo?</strong>
                <h3 className='mt-5'><strong>4. Tác dụng của TPCN Trường Xuân Vương</strong></h3>
                <p>Viên uống tăng cường sinh lý Trường Xuân Vương là một trong số ít sản phẩm được nghiên cứu về hiệu quả đối với sức khỏe, sinh lý phái mạnh.</p>
                <img className='w-75 d-block mx-auto' src={txv4} />
                <ul>
                    <li>Sau 1 – 7 ngày đầu: Cơ thể có chuyển biến tích cực, giảm mệt mỏi, có ham muốn hơn và thời gian “yêu” được cải thiện.</li>
                    <li>Sau 7 – 20 ngày: Nếu dùng sản phẩm đều đặn trong 7 – 20 ngày, phái mạnh có thể thấy hiệu quả rõ rệt hơn. Lúc này cơ thể phục hồi hoàn toàn, không còn mệt mỏi, cuộc yêu cải thiện về thời gian và chất lượng.</li>
                    <li>Sau 20 – 50 ngày: Bạn có thể cảm nhận được những chuyển biến tích cực về sinh lý, không còn mỏi gối, đau lưng, tiểu đêm, tiểu nhiều lần.</li>
                    <li>Sau 50 ngày: Viên uống Trường Xuân Vương cho tác dụng đầy đủ sau 50 ngày sử dụng. Lúc này cơ thể khỏe mạnh, dẻo dai, ít mệt mỏi, nhiều năng lượng. Ngoài ra, cải thiện triệu chứng rối loạn tình dục, giảm ham muốn, xuất tinh sớm. Hầu hết nam giới đều nhận thấy đời sống tình dục được nâng cao sau 50 ngày.</li>
                </ul>
                <h3><strong>5. Ai nên sử dụng TPCN Trường Xuân Vương?</strong></h3>
                <p>Trường Xuân Vương là sản phẩm được phát triển từ bài thuốc tăng cường sinh lý nam của lương y Nguyễn Hữu Trọng. Sản phẩm đã được kiểm chứng về an toàn và hiệu quả với sức khỏe nam giới. </p>
                <img className='mt-5 w-75 d-block mx-auto' src={txv5} alt="" />
            </div>
            <div className="price text-center mt-5">
                <h4>Giá sản phẩm chỉ: <span className='text-danger fw-bold'>790.000 ₫</span></h4>
                <img className='mt-5 w-25 d-block mx-auto' src={txv3} alt="" />
            </div>
            <h3 className='text-center bg-dark text-white mt-5'><marquee scrollamount="10">Liên hệ với shop để được hỗ trợ mua hàng với giá ưu đãi</marquee></h3>
        </div>
    );
}

export default Introduct;