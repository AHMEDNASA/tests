/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        startApp();
        //////////////////////////////////////////////
        // navigator.splashscreen.show();
        // setTimeout(function() {
        //     navigator.splashscreen.hide();

        // }, 3000); 

        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);

        function onOnline() {
            myApp.hideIndicator();
            mainView.router.back();
        }



        function onOffline() {
            mainView.router.loadPage("./noConn.html");
        }
        /////////////////////////////////////////////

    }
};

app.initialize();



// /////////////////////////////////////////////////////////////////////////////////////

// My Code - Start

// /////////////////////////////////////////////////////////////////////////////////////

function startApp(argument) {
    // body...





    // Initialize app
    myApp = new Framework7({
        swipeBackPage: false,
        imagesLazyLoadThreshold: 50,
        material:true
    });

    // If we need to use custom DOM library, let's save it to $$ variable:
    $$ = Dom7;

    // Add view
    mainView = myApp.addView('.view-main', {
        // Because we want to use dynamic navbar, we need to enable it for this view:
        dynamicNavbar: true,

    });

    ///////////////////////////////

    //Back Button

    /////////////////////////////

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // alert(myApp.getCurrentView().activePage.fromPage.name);
        // if(myApp.getCurrentView().activePage.fromPage.name=="index"){
        //  window.plugins.appMinimize.minimize();
        // }
        myApp.hideIndicator();

        mainView.router.back();

    }




    // /////////////////////////////////////////////////////////////////////////////////////

    // My Code - End

    // ////////////////////////////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////////////////////////////

    // My Template - Start

    // ////////////////////////////////////////////////////////////////////////////////////

    function createCard(item) {


        var image = item.images["0"].src;
        var title = 1;

        var url = 1;
        var teaser = 1;


        if (image) {






         
        var temp= '<div class="card-panel lighten-5 z-depth-1">'+
          '<div class="row valign-wrapper">'+
            '<div class="col s8">'+
              '<div class="row valign-wrapper _productTitle right-align ">Title</div>'+
              '<div class="row valign-wrapper _productPrice right-align ">Price</div>'+
              '<div class="row _productQun ">'+
                '<div class="col s2 center"><i class="material-icons">remove_circle_outline</i></div>'+
                '<div class="col s2 center">1</div>'+
                '<div class="col s2 center"><i class="material-icons">add_circle_outline</i></div>'+
                '<div class="col s6 center"></div>'+
              '</div>'+
            '</div>'+
            '<div class="col s4">'+
                '<img src="'+image+'" alt="" class="responsive-img">'+
            '</div>'+
          '</div>'+
        '</div>';

            // var temp = '<div class="row">' +
            //     '<div class="col s12 m7">' +
            //     '<div class="card">' +
            //     '<div class="card-image">' +
            //     '<img class="responsive-img" src="' + image + '">' +
            //     '<span class="col s12 card-title " style="background-color:rgba(66,66,66,0.6)">' + title + '</span>' +
            //     '</div>' +
            //     '<div class="card-content center"><p>' +
            //     '' + teaser + '' +
            //     '</p></div>' +
            //     '<div class="card-action">' +
            //     '<a class="waves-effect waves-light btn my_btn" href="details.html?url=' + url + '">Read More</a>' +
            //     '</div>' +
            //     '</div>' +
            //     '</div>' +
            //     '</div>';
        } else {

            var temp = '<div class="row">' +
                '<div class="col s12 m7">' +
                '<div class="card small">' +
                '<div class="card-image">' +
                '<img class="responsive-img" src="img/defaultImg.png">' +
                '<span class="col s12 center card-title">' + title + '</span>' +
                '</div>' +
                '<div class="card-content center">' +
                '' + teaser + '' +
                '</div>' +
                '<div class="card-action">' +
                '<a class="col s12 waves-effect waves-light btn my_btn" href="details.html?url=' + url + '">Read More</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
        }


        $("#productList").append(temp);
    }


    function createGallary(image, oldPrice, newPrice, startDate, endDate, discount, des) {


        var image = $(image).find("img")[0].src;
        var content = '<address class="my_arabic right-align" style="font-size: 15px"><p><strong>السعر القديم</strong> : <strike>' + $(oldPrice)[0].innerHTML + '</strike></p>' +
            '<p><strong>السعر الجديد</strong> : ' + $(newPrice)[0].innerHTML + '</p>' +
            '<p><strong>تاريخ بداية العرض</strong> : ' + $(startDate)[0].innerHTML + '</p>' +
            '<p><strong>تاريخ نهاية العرض</strong> : ' + $(endDate)[0].innerHTML + '</p>' +
            '<p><strong>نسبة الخصم</strong> : ' + $(discount)[0].innerHTML + '</p></address>';




        // for (var i = 0; i < data.length; i++) {
        //     image =data[0].src;
        //     content =data[1].children["0"].innerHTML;
        // }
        var temp = '<div class="card ">' +
            '<div class="card-image waves-effect waves-block waves-light">' +
            '<img class="activator" src="' + image + '">' +
            '</div>' +
            '<div class="card-content">' +
            '<a class="activator waves-effect waves-light btn my_btn">More Details<i class="material-icons right"></i></a>' +
            '</div>' +
            '<div class="card-reveal ">' +
            '<span class="card-title grey-text text-darken-4 center" style="font-weight:bold">' + $(des)[0].innerHTML + '<i class="material-icons right" style="font-size:40px">close</i></span>' +
            '<br><p>' + content + '</p>' +
            '</div>' +
            '</div>';

        $("#gallary").append(temp);
    }




    // /////////////////////////////////////////////////////////////////////////////////////

    // My Template - End

    // ///////////////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////


    // Functions

    //////////////////////////////////////////////////////

    function listLoop(element) {
        var a = element[0].children;
        createGallary(a);
    }


    //////////////////////////////////////////////////////

    // Functions END

    ////////////////////////////////////////////////////

    myApp.onPageInit('products', function(page) {
        // Do something here for "about" page
        myApp.showIndicator();
        $$.getJSON("http://63.142.251.169/wsmartcart/woo.php", function(data) {

            console.log(data);
            myApp.hideIndicator();
             data.forEach(function(post) {
                createCard(post);
             });

        });

    });

    myApp.onPageInit('jordan_uni', function(page) {

        // Do something here for "about" page
        myApp.showIndicator();
        $$.getJSON("http://104.236.231.108/joads/index.php/wp-json/wp/v2/myads?categories=4&_embed=true", function(data) {
            myApp.hideIndicator();
            data.forEach(function(post) {
                createCard(post);
            });

        });

    });


    myApp.onPageInit('balqa_uni', function(page) {
        // Do something here for "about" page
        myApp.showIndicator();
        $$.getJSON("http://104.236.231.108/joads/index.php/wp-json/wp/v2/myads?categories=5&_embed=true", function(data) {

            myApp.hideIndicator();
            data.forEach(function(post) {
                createCard(post);
            });
        });
    });

    myApp.onPageInit('aqaba_uni', function(page) {
        // Do something here for "about" page
        myApp.showIndicator();
        $$.getJSON("http://104.236.231.108/joads/index.php/wp-json/wp/v2/myads?categories=6&_embed=true", function(data) {

            myApp.hideIndicator();
            data.forEach(function(post) {
                createCard(post);
            });
        });
    });




    myApp.onPageInit('details', function(page) {
        // Do something here for "about" page
        // var uri = encodeURI(page.query.url);
        $('ul.tabs').tabs();

        getDetails(page.query.url);
    });




    function getDetails(url) {
        myApp.showIndicator();
        $$.getJSON(url, function(data) {
            myApp.hideIndicator();


            // var image = data._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium.source_url;
            var title = data.title.rendered;
            var content = data.content.rendered;
            var gallary = $(content).filter("table");
            // createGallary(gallary);




            var rows = gallary["0"].children["0"].children;

            for (var i = 1; i < rows.length; i++) {
                var row = gallary["0"].children["0"].children[i];

                var col = $(row)["0"].children;
                createGallary(col[0], col[1], col[2], col[3], col[4], col[5], col[6]);
            }


            // if(image){
            //     $("#my_img").attr("src", image);
            // }else{
            //     $("#my_img").attr("src", "img/defaultImg.png");
            // }

            $("#title").html(title);

            $("#my_content").html(content);
            $("table").remove();
            $("table").attr('class', 'striped');


            // var list = $(gallary)[0].children;

            // for (var i = 0; i < list.length; i++) {
            //     listLoop($(list[i]));
            // }







        });

    }


    myApp.onPageInit('noConn', function(page) {
        myApp.hideIndicator();
        var h = $("#noConnPage").css('height');
        $("#noConnPageCard").css('height', h);
    });




}
