function siatka(ranking, klub, mecze, wygrane, przegrane) {
    this.ranking = ranking;
    this.klub = klub;
    this.mecze = mecze;
    this.wygrane = wygrane;
    this.przegrane = przegrane;
}
const tab_prac = new Array();
tab_prac[0] = new siatka(1, "Grupa Azoty ZAKSA Kędzierzyn-Koźle", "35", '29', "6");
tab_prac[1] = new siatka(2, "Jastrzębski Węgiel", "35", '27', "8");
tab_prac[2] = new siatka(3, "Aluron CMC Warta Zawiercie", "35", '23', "12");
tab_prac[3] = new siatka(4, "PGE Skra Bełchatów", "35", '24', "11");
tab_prac[4] = new siatka(5, "Asseco Resovia Rzeszów", "30", '15', "15");
tab_prac[5] = new siatka(6, "Indykpol AZS Olsztyn", "31", '16', "15");
tab_prac[6] = new siatka(7, "Trefl Gdańsk", "31", '15', "16");
tab_prac[7] = new siatka(8, "GKS Katowice", "30", '13', "18");
tab_prac[8] = new siatka(9, "Projekt Warszawa", "28", '14', "14");
tab_prac[9] = new siatka(10, "Cuprum Lubin", "28", '8', "20");
tab_prac[10] = new siatka(11, "LUK Lublin", "28", '10', "18");
tab_prac[11] = new siatka(12, "Ślepsk Malow Suwałki", "12", '7', "21");

function wyswietlTabela(tab) {
    let txt = ""
    txt += "<tr>";
    txt += "<th> Numer w rankingu </th>";
    txt += "<th> Klub </th>";
    txt += "<th> Rozegrane mecze</th>";
    txt += "<th> Wygrane</th>";
    txt += "<th> Przegrane </th>";
    txt += "</tr>";

    for (var i = 0; i < tab.length; i++) {
        txt += "<tr>";
        txt += "<td>" + tab[i].ranking + "</td>";
        txt += "<td>" + tab[i].klub + "</td>";
        txt += "<td>" + tab[i].mecze + "</td>";
        txt += "<td>" + tab[i].wygrane + "</td>";
        txt += "<td>" + tab[i].przegrane + "</td>";
        txt += "</tr>";

    }
    let elemTab_HTML = document.getElementById("tabela");
    elemTab_HTML.innerHTML = txt;
}

