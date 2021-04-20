const url = "https://script.google.com/macros/s/AKfycbz-2u_G2SmSJNkLzmCs-l4Dn-nVnJiTLtYpKkqiYvdHftyO3yPaA4D4/exec";

fetch(url)
    .then(d => d.json())
    .then(d => {
        d.forEach(e => {

            document.getElementById('app').innerHTML += `
            
            <li class="cards_item">
                <div class="card">
                  <div class="card_image"><img src="${e[12]}"></div>
                  <div class="card_content">
                    <div class="number">
                        <div class="num_text">
                            <h4>${e[0]}</h4>
                        </div>
                    </div>
                    <div class="top">
                        <h2 class="card_file">${e[1]}</h2>
                        <h2 class="card_drawing">${e[4]}</h2>
                    </div>
                    <div class="station">
                        <h3>${e[8]}</h3>
                        <p>< -- ></p>
                        <h3>${e[9]}</h3>
                    </div>
                    <div class="footer">
                        <h3>${e[6]}</h3>
                        <h3>${e[5]}</h3>
                    </div>
                    <div class="status">
                        <h3>${e[10]}</h3>
                    </div>
                    
                    <button class="btn card_btn"> ${e[10]} ${e[11]}</button>
                  </div>
                </div>
            </li>
            
            
            `


        })
});