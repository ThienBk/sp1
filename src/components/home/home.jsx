import React from 'react';
import homeBanner from "../../accessts/img/a-02.jpg"

function Home(props) {
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Mỹ Phẩm Kayoko Plus</h1>
            <div className='mt-5'>
                <h3 className='text-center'></h3>
                Bí quyết làm đẹp da hiệu quả của phụ nữ Nhật Bản
                Mỹ phẩm Kayoko Plus sử dụng các thành phần có nguồn gốc thiên nhiên và thân thiện với môi trường như nước khử ion hóa, chiết xuất từ các loại thảo dược: lô hội, bạch quả, tử lan, lúa mạch, cải xoong, hoa cúc, vitamin C, vitamin E tác dụng làm trắng da, điều trị làn da nám đen, nám vàng, tàn nhang và mụn trứng cá, cân bằng sự bài tiết bã nhờn giúp da nâng cao khả năng chống oxi hóa, phục hồi làn da mềm mại và rạng ngời của tuổi thanh xuân. Bộ sản phẩm này được bán rộng rãi trên một số nước Châu Á trong đó có Việt Nam, đã làm hài lòng hài triệu phụ nữ Châu Á....
            </div>
            <p className='mt-3'>Một trong những sản phẩm mới nhất của nhà <strong>Mỹ Phẩm Kayoko Plus</strong> đó là: </p>
            <h3>Serum Oral Cleaning</h3>
            <div className="container"><img className='w-100' src={homeBanner} alt="" /></div>
            <div className='text-center my-5'>Make by: @Thiện21</div>
        </div>
    );
}

export default Home;