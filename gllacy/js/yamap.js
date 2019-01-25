// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){   
        var myMap = new ymaps.Map("ya-map", {
            center: [59.9392, 30.32929],
            zoom: 16,
            //Элементы управления.
            controls: ["zoomControl", "fullscreenControl", "routeButtonControl"]
        }, {
            searchControlProvider: "yandex#search"
        }),
            
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.938630, 30.323049], {
            balloonContent: 'Фирменный магазин Gllacy'
        }, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map-mark.png',
            // Размеры метки.
            iconImageSize: [218, 142],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-44, -142]
        });
      
      myMap.geoObjects
        .add(myPlacemark);
    }