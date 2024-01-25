// Request and Response Data Fetching from Each Methods =====

/* ====== Common Post Request Function ====== */
async function postRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

/* ====== Common Put Request Function ====== */
async function putRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

/* ====== Common Delete Request Function ====== */
async function deleteRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

/* ====== Common GET Request Function ====== */
async function getRequest(url) {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}
// async : 병렬구조로 await fetch로 들어오는 데이터를 불러옮. !!!!! await qnffjdhsms rkqt
//  ! : 아니라면
// fetch : 외부 데이터에거 결과 데이터를 들고 오는 것
// return : 들고 돌아옴

//  'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=3'

async function getProducts(qnt) {
  const url = `https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=${qnt}`;
  //qnt값
  try {
    //데이터 요청 및 응답시도 : 성공일 경우 첫번째 코드 블럭으로 이동
    const data = await getRequest(url);
    console.log(data);
  } catch (error) {
    //실패 할 경우 두번째 코드 블럭으로 이동
    console.log('Error : ', error);
  }
}

getProducts(4);
