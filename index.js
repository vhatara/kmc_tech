const locations_data = [
    {
        name: 'The Shop',
        operating_hours: '10pm',
        address: 'California',
        contact_num: '826-9652'
    },
    {
        name: 'Green Groceries',
        operating_hours: '8am - 6pm',
        address: '123 Main Street, Los Angeles, CA',
        contact_num: '555-1234'
    },
    {
        name: 'Tech Haven',
        operating_hours: '9am - 8pm',
        address: '456 Tech Street, San Francisco, CA',
        contact_num: '789-5678'
    },
    {
        name: 'Books n More',
        operating_hours: '11am - 7pm',
        address: '789 Library Lane, Sacramento, CA',
        contact_num: '987-6543'
    },
    {
        name: 'Fitness First',
        operating_hours: '6am - 9pm',
        address: '101 Health Avenue, San Diego, CA',
        contact_num: '321-0987'
    },
    {
        name: 'Fashion Fiesta',
        operating_hours: '12pm - 10pm',
        address: '222 Style Street, Los Angeles, CA',
        contact_num: '555-5678'
    },
    {
        name: 'Pet Paradise',
        operating_hours: '9am - 5pm',
        address: '333 Pet Lane, San Francisco, CA',
        contact_num: '777-8888'
    },
    {
        name: 'Coffee Central',
        operating_hours: '7am - 8pm',
        address: '444 Brew Boulevard, Sacramento, CA',
        contact_num: '444-3333'
    },
    {
        name: 'Electronics Emporium',
        operating_hours: '10am - 7pm',
        address: '555 Gadget Road, San Diego, CA',
        contact_num: '999-0000'
    },
    {
        name: 'Home Essentials',
        operating_hours: '8am - 9pm',
        address: '666 Homestead Lane, Los Angeles, CA',
        contact_num: '666-1111'
    }
];

const locations_list = document.getElementById("locationsList");
const locations = locations_data.map((location, idx) => {
    return `

    <div class="item flex-row">
        <div class="operating_hours">
            <div class="pin_count">
                <span>${idx + 1}</span>
                <img src="./demo-locator-images/map_pin_regular.png" >
                <p>Open until <br>${location.operating_hours}</p>
            </div>                        
        </div>

        <div class="location_details">
            <p class="shop_name">${location.name}</p>
            <p class="shop_address">${location.address}</p>
            <p class="shop_phone">
                <img class="phone_icon" src="./demo-locator-images/phone_icon.png">
                ${location.contact_num}
            </p>
            <button class="get_directions" id="get_directions" onClick="getDirections(${idx})">Get Directions</button>
        </div>

        <div class="more_info">
            <button class="more_info_btn">
                <img src="./demo-locator-images/chevron_right.png">
            </button>
        </div>
    </div>
    `
});
locations_list.innerHTML = locations.join('');

const location_count = document.getElementById('location_count');
location_count.innerHTML = locations_data.length;

filter_btn = document.getElementById('filter_btn');
location_info = document.getElementById('location_info');
location_desc = document.getElementById('location_desc');
filters_container = document.getElementById('filters_container');
list_view = document.getElementById('list_view');
map_view = document.getElementById('map_view');
map_mobile = document.getElementById('map_mobile');
let filter_switch = true;
let isOnListView = true;

filter_btn.addEventListener('click', () => {
    if (filter_switch) { 
        location_info.style.display = 'none';
        location_desc.innerHTML = "Filters";
        location_desc.style.textAlign = 'start'
        filters_container.style = ''
        filter_switch = false;
        map_mobile.style.display = 'none';
    } else {
        location_info.style.display = '';
        location_desc.innerHTML= "There are <span id='location_count'></span> locations near you"
        location_desc.style.textAlign = 'center'
        filters_container.style = 'none'
        const location_count = document.getElementById('location_count');
        location_count.innerHTML = locations_data.length;
        map_mobile.style.display = 'none';
        filter_switch = true;
    }
})

isOnMobileView = false;

if (window.innerWidth < 600) { 
    isOnMobileView = true;
}

window.addEventListener('resize', () => {

    if (window.innerWidth < 600 ) { 
        isOnMobileView = true;
    } else { 
        isOnMobileView = false;
    }
})

function getDirections (idx) {
    alert("Directions for location: " + (idx+1));
   }

close_filters = document.getElementById('close_filters');
close_filters.addEventListener('click', () => {
        location_desc.innerHTML= "There are <span id='location_count'></span> locations near you"
        location_desc.style.textAlign = 'center'
        filters_container.style = 'none'
        const location_count = document.getElementById('location_count');
        location_count.innerHTML = locations_data.length;
        filter_switch = true;

    if (isOnMobileView) {
        if (isOnListView) {
            location_desc.style.display=''
            location_info.style.display = '';
            locations_list.style.display='';
            
            map_mobile.style.display='none';
        } else { 
            location_desc.style.display='none'
            locations_list.style.display='none';
            map_mobile.style.display='block';
        }
    } else {
        map_mobile.style.display = 'flex';
        location_info.style.display = 'flex';
    }
        
})

// Filter Solution#2:
// filter_btn.addEventListener('click', () => {
//     filter_switch = !filter_switch;
//     location_info.style.display =  filter_switch ? 'none' : '';
// })


list_view.addEventListener('click', () => {
    list_view.classList.add('active');
    map_view.classList.remove('active');
    location_desc.style.display='';
    locations_list.style.display='';
    location_info.style.display='';
    filters_container.style.display='none';
    map_mobile.style.display = 'none';
    isOnListView = true;
    console.log('nasa list biewm ka');
})

map_view.addEventListener('click', () => {
    location_desc.style.display='none';
    locations_list.style.display='none';
    list_view.classList.remove('active');
    map_view.classList.add('active');
    map_mobile.style.display='block';
    filters_container.style.display='none';
    isOnListView = false;
})