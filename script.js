// All Data 

async function getData() {
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
let data = await getData();
let html = '';
    data.map(user => {
        let htmlSegment = `<div class="col-3">                
        <div class="card" style="width: 14rem;">
        <div class="container">
            <img class="card-img-top" src="${user.links.mission_patch_small}" alt="Card image cap">
            <div class="card-body">
              <h6 class="card-title missionName">${user.mission_name} #${user.flight_number}</h6>
              <h6 class="card-title"><span class="details">Mission Ids: </span>${user.mission_id}</h6>
              <h6 class="card-title"><span class="details">Launch Year: </span>${user.launch_year}</h6>
              <h6 class="card-title"><span class="details">Successful Launch: </span>${user.launch_success}</h6>
            </div>
        </div>                            
    </div>
    </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.data');
    container.innerHTML = html;
}
renderData()

// Launch Success Data 

async function getLaunchSuccessData() {
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderLaunchSuccessData() {
    alert("Loading: Successful Launch Data")
    let data = await getLaunchSuccessData();
    console.log(data)
    let html = '';
        data.map(user => {
            if(user.launch_success === true) {
                let htmlSegment = `<div class="col-3">                
            <div class="card" style="width: 14rem;">
            <div class="container">
                <img class="card-img-top" src="${user.links.mission_patch_small}" alt="Card image cap">
                <div class="card-body">
                  <h6 class="card-title missionName">${user.mission_name} #${user.flight_number}</h6>
                  <h6 class="card-title"><span class="details">Mission Ids: </span>${user.mission_id}</h6>
                  <h6 class="card-title"><span class="details">Launch Year: </span>${user.launch_year}</h6>
                  <h6 class="card-title"><span class="details">Successful Launch: </span>${user.launch_success}</h6>
                </div>
            </div>                            
        </div>
        </div>`;
    
            html += htmlSegment;
            }
            
        });
    
        let container = document.querySelector('.data');
        container.innerHTML = html;
    alert("Successful Loaded. Click OK to view...")

    }

    // Launch Failure Data 

async function getLaunchFailureData() {
    let url = 'https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderLaunchFailureData() {
    alert("Loading: Failed Launch Data")
    let data = await getLaunchFailureData();
    let html = '';
        data.map(user => {
            if(user.launch_success !== true) {
                let htmlSegment = `<div class="col-3">                
            <div class="card" style="width: 14rem;">
            <div class="container">
                <img class="card-img-top" src="${user.links.mission_patch_small}" alt="Card image cap">
                <div class="card-body">
                  <h6 class="card-title missionName">${user.mission_name} #${user.flight_number}</h6>
                  <h6 class="card-title"><span class="details">Mission Ids: </span>${user.mission_id}</h6>
                  <h6 class="card-title"><span class="details">Launch Year: </span>${user.launch_year}</h6>
                  <h6 class="card-title"><span class="details">Successful Launch: </span>${user.launch_success}</h6>
                </div>
            </div>                            
        </div>
        </div>`;
    
            html += htmlSegment;
            }            
        });
    
        let container = document.querySelector('.data');
        container.innerHTML = html;
    alert("Successful Loaded. Click OK to view...")

    }

    // Get Data By Year

    function selectYear() {
        var year = document.getElementsByTagName('span');
        for (var i = 0; i < year.length; i++) {
            year[i].onclick = function () {
                localStorage.setItem('year', this.innerText)                  
            }
        }
    }

    async function getDataByYear() {
        let url = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
    
    async function renderDataByYear() {
        alert("Loading: Data By Year")
        let data = await getDataByYear();  
        if (localStorage.getItem('year') === null) {
            alert("Failed to load data... Try again")
            return false
        } else {
            var year = localStorage.getItem('year');
        }              
        console.log(year)
        let html = '';
            data.map(user => {
                if(user.launch_year === year) {
                    let htmlSegment = `<div class="col-md-3">                
                <div class="card" style="width: 14rem;">
                <div class="container">
                    <img class="card-img-top" src="${user.links.mission_patch_small}" alt="Card image cap">
                    <div class="card-body">
                      <h6 class="card-title missionName">${user.mission_name} #${user.flight_number}</h6>
                      <h6 class="card-title"><span class="details">Mission Ids: </span>${user.mission_id}</h6>
                      <h6 class="card-title"><span class="details">Launch Year: </span>${user.launch_year}</h6>
                      <h6 class="card-title"><span class="details">Successful Launch: </span>${user.launch_success}</h6>
                    </div>
                </div>                            
            </div>
            </div>`;
        
                html += htmlSegment;
                }            
            });
        
            let container = document.querySelector('.data');
            container.innerHTML = html;
        alert("Successful Loaded. Click OK to view...")
    
        }

        