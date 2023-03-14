if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log("현재 위치는 위도 " + latitude + "경도 " + longitude + " 입니다.");
    });
  } else {
    console.log("현재 위치를 가져올 수 없습니다.");
  }