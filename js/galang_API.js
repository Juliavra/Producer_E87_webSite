function printsData(data) {
    console.log(data);

    const newDiv = document.createElement('div');
    newDiv.style.border = "2px solid green";

    // ======================
    // HELPERS
    // ======================
    const addBreak = (parent) => {
        parent.appendChild(document.createElement("br"));
    };

    // ←←← REFINED addSection (handles arrays automatically!)
    const addSection = (parent, label = '', content = '', options = {}) => {
        const { separator = ', ', formatter = null } = options;

        const p = document.createElement("p");
        if (label) p.appendChild(document.createTextNode(label));

        if (content != null && content !== '') {
            let finalText = '';
            if (Array.isArray(content)) {
                if (formatter && typeof formatter === 'function') {
                    finalText = content.map(formatter).join(separator);
                } else {
                    finalText = content.join(separator);
                }
            } else {
                finalText = String(content);
            }
            if (finalText) p.appendChild(document.createTextNode(finalText));
        }

        parent.appendChild(p);
        return p;
    };

    // ======================
    // CONTENT STARTS HERE
    // ======================
    const imgAlbum = document.createElement('img');
    imgAlbum.src = data.thumb;
    newDiv.appendChild(imgAlbum);
    addBreak(newDiv);

    // Artist + Title (simple)
    addSection(newDiv, data.artists[0].name + " - ");
    addSection(newDiv, " " + data.title);
    addBreak(newDiv);

    // Labels (array of objects)
    addSection(newDiv, "Labels: ", data.labels, {
        formatter: l => `${l.name} - ${l.catno}`
    });
    addBreak(newDiv);

    // Formats (array of objects)
    addSection(newDiv, "Formats: ", data.formats, {
        formatter: f => `${f.qty} ${f.name} ${f.descriptions || ''} ${f.text || ''}`.trim()
    });
    addBreak(newDiv);

    // Simple fields
    addSection(newDiv, "Country: ", data.country);
    addSection(newDiv, "Published: ", data.year);

    // Genres + Styles (simple string arrays)
    addSection(newDiv, "Genre: ", data.genres);
    addBreak(newDiv);
    addSection(newDiv, "Styles: ", data.styles);
    addBreak(newDiv);

    // ======================
    // TRACKLIST (still needs per-line breaks)
    // ======================
    const tracklistP = addSection(newDiv, "Tracklist");
    addBreak(tracklistP);

    data.tracklist.forEach(t => {
        tracklistP.appendChild(document.createTextNode(
            `${t.position} ${t.title} ${t.duration}`
        ));
        addBreak(tracklistP);
    });
    addBreak(newDiv);

    // ======================
    // COMPANIES (multi-line)
    // ======================
    if (data.companies?.length) {
        const companiesP = addSection(newDiv);
        data.companies.forEach(c => {
            companiesP.appendChild(document.createTextNode(
                `${c.entity_type_name}: ${c.name}`
            ));
            addBreak(companiesP);
        });
        addBreak(newDiv);
    }

    // ======================
    // CREDITS / EXTRA ARTISTS (multi-line)
    // ======================
    if (data.extraartists?.length) {
        addSection(newDiv, "CREDITOS: ");
        addBreak(newDiv);

        const creditsP = addSection(newDiv);
        data.extraartists.forEach(e => {
            creditsP.appendChild(document.createTextNode(`${e.role} - ${e.name}`));
            addBreak(creditsP);
        });
        addBreak(newDiv);
    }

    // ======================
    // NOTES
    // ======================
    if (data.notes != null && data.notes !== "undefined") {
        const notesP = addSection(newDiv, "Notes: ");
        addBreak(notesP);
        notesP.appendChild(document.createTextNode(data.notes));
        addBreak(newDiv);
    }

    // Final break + append to page
    addBreak(newDiv);
    document.getElementById('container').appendChild(newDiv);
}