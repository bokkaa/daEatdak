window.onload = function () {
    // 아이디 중복 체크
    document.getElementById("order-PostCodeSearch").onclick = function PostCodeSearch(){
        new daum.Postcode({
        oncomplete: function(data) {
            console.log(data);
            document.querySelector('#order-address').value = data.roadAddress;
        }
        }).open();
    }
}




