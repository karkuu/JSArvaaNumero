import React from 'react';

export default class EtuSivu extends React.Component {
  render() {
    return (
		<div class="card">
		  <div class="card-body">
				<h3>Uudet ilmoitukset</h3>
		<table class="table table-bordered">
		  <thead>
		    <tr>
         <th>Ilmoitus</th>
         <th colspan="2">Päivämäärä</th>
         <th colspan="3">Ilmoittaja</th>
         <th colspan="3">Ilmoitus</th>
         <th>Toiminnot</th>
		    </tr>
		  </thead>
		  <tbody>
        <tr>
          <td></td>
          <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><input type="text" class="form-control" id="ilmoitusHaeNimellä" placeholder="Nimi" /></td>
          <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td>
        <select class="form-control" id="ilmoitustyyppi">
		  <option>Kaikki</option>
          <option>Vikailmoitus (H)</option>
          <option>Avaimet (H)</option>
          <option>Autopaikat (H)</option>
          <option>Saunavuorot (H)</option>
          <option>Lähtöilmoitus (I)</option>
          <option>Vastikeasiat (I)</option>
          <option>Häiriöilmoitus (I)</option>
          <option>Reklamaatio (I)</option>
          <option>Muu palaute (I)</option>
          <option>Yhteydenotto (I) (H)</option>
        </select></td>
          <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
          <td></td>
        </tr>
		     <tr>
          <td onclick="datahaku.naytaIlmoituksenTiedotIsannoitsija(1);"><a href="index.html">Kissa katolla apua</a></td>
          <td colspan="2">15.2.2018 09:15</td>
          <td colspan="3">Taavetti Tompainen</td>
          <td colspan="3">Muu palaute</td>
          <td><a href="index.html"><img src="img/vastaanotettu.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/tyonalla.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/keskeytynyt.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/valmis.svg" class="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/></a>
          </td>
		     </tr>
			 <tr>
          <td><a href="index.html" onclick="datahaku.naytaIlmoituksenTiedotIsannoitsija(2);">Hana tippuu vieläkin!</a></td>
          <td colspan="2">14.2.2018 19:52</td>
          <td colspan="3">Katti Matikainen</td>
          <td colspan="3">Reklamaatio</td>
          <td><a href="index.html"><img src="img/vastaanotettu.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/tyonalla.svg" class="img-fluid border border-dark rounded bg-warning" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/keskeytynyt.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/valmis.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a>
			</td>
        </tr>
	     <tr>
          <td><a href="index.html" onclick="datahaku.naytaIlmoituksenTiedotIsannoitsija(3);">Naapuri bilettää taas</a></td>
          <td colspan="2">13.2.2018 23:15</td>
          <td colspan="3">Pekka Töpöhäntä</td>
          <td colspan="3">Häiriöilmoitus</td>
          <td><a href="index.html"><img src="img/vastaanotettu.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/tyonalla.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/keskeytynyt.svg" class="img-fluid img-fluid border border-dark rounded bg-danger" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/valmis.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a>
			</td>
		     </tr>
		     <tr>
          <td><a href="index.html" onclick="datahaku.naytaIlmoituksenTiedotIsannoitsija(4);">Autopaikasta</a></td>
          <td colspan="2">10.2.2018 09:15</td>
          <td colspan="3">Taavetti Tompainen</td>
          <td colspan="3">Muu palaute</td>
          <td><a href="index.html"><img src="img/vastaanotettu.svg" class="img-fluid border border-dark rounded bg-primary" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/tyonalla.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/keskeytynyt.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/valmis.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a>
			</td>
		     </tr>
		     <tr>
          <td><a href="index.html" onclick="datahaku.naytaIlmoituksenTiedotIsannoitsija(5);">Naapuri bilettää</a></td>
          <td colspan="2">06.2.2018 00:15</td>
          <td colspan="3">Pekka Töpöhäntä</td>
          <td colspan="3">Häiriöilmoitus</td>
          <td><a href="index.html"><img src="img/vastaanotettu.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/tyonalla.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/keskeytynyt.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/valmis.svg" class="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/></a>
			</td>
		   </tr>
 
		  </tbody>
		</table>

   <h3>Kuitatut ilmoitukset</h3>
   <table class="table table-bordered" id="oldElements">
     <thead class="thead-light">
       <tr>
         <th>Ilmoitus</th>
         <th>Päivämäärä</th>
         <th colspan="3">Ilmoittaja</th>
         <th colspan="3">Ilmoitus</th>
         <th>Kuittaus</th>
		    </tr>
		  </thead>
		  <tbody>
       <tr>
         <td></td>
         <td></td>
         <td><input type="text" class="form-control" id="ilmoitusHaeNimellä" placeholder="Nimi" /></td>
         <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><input type="text" class="form-control" id="ilmoitusHaeTyyppi" placeholder="Ilmoitus" /></td>
         <td><a href="index.html"><img src="img/jarjestysylos.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td><a href="index.html"><img src="img/jarjestysalas.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
         <td></td>
       </tr>
		    <tr>
         <td onclick="datahaku.naytaIlmoituksenTiedotIsannoitsija(5);"><a href="index.html">Kuka tohelo kolas...</a></td>
         <td>05.2.2018 11:12</td>
         <td colspan="3">Janne Holopainen</td>
         <td colspan="3">Muu palaute</td>
         <td>Kuitattu 06.02.2018 10:00 - Isännöitsijä Jonne</td>
		    </tr>
		    <tr>
         <td onclick="datahaku.naytaIlmoituksenTiedotIsannoitsija(5);"><a href="index.html">Naapuri juhliii</a></td>
         <td>01.2.2018 00:30</td>
         <td colspan="3">Pekka Töpöhäntä</td>
         <td colspan="3">Häiriöilmoitus</td>
         <td>Kuitattu 02.02.2018 09:15 - Isännöitsijä Jonne</td>
		    </tr>
		  </tbody>
   </table>
		<a href="index.html">Lisää ilmoituksia...</a>
		<br/><br/>
		  </div>
		</div>
    );
  }
}
