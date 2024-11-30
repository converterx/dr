const codonTable = {
  'UUU': 'Fenilalanin (F)', 'UUC': 'Fenilalanin (F)', 'UUA': 'Lösin (L)', 'UUG': 'Lösin (L)',
  'CUU': 'Lösin (L)', 'CUC': 'Lösin (L)', 'CUA': 'Lösin (L)', 'CUG': 'Lösin (L)',
  'AUU': 'İzolösin (I)', 'AUC': 'İzolösin (I)', 'AUA': 'İzolösin (I)', 'AUG': 'Metiyonin (Başlat)',
  'GUU': 'Valin (V)', 'GUC': 'Valin (V)', 'GUA': 'Valin (V)', 'GUG': 'Valin (V)',
  'UCU': 'Serin (S)', 'UCC': 'Serin (S)', 'UCA': 'Serin (S)', 'UCG': 'Serin (S)',
  'CCU': 'Prolin (P)', 'CCC': 'Prolin (P)', 'CCA': 'Prolin (P)', 'CCG': 'Prolin (P)',
  'ACU': 'Treonin (T)', 'ACC': 'Treonin (T)', 'ACA': 'Treonin (T)', 'ACG': 'Treonin (T)',
  'GCU': 'Alanin (A)', 'GCC': 'Alanin (A)', 'GCA': 'Alanin (A)', 'GCG': 'Alanin (A)',
  'UAU': 'Tirozin (Y)', 'UAC': 'Tirozin (Y)', 'UAA': 'STOP', 'UAG': 'STOP',
  'CAU': 'Histidin (H)', 'CAC': 'Histidin (H)', 'CAA': 'Glutamin (Q)', 'CAG': 'Glutamin (Q)',
  'AAU': 'Asparagin (N)', 'AAC': 'Asparagin (N)', 'AAA': 'Lizin (K)', 'AAG': 'Lizin (K)',
  'GAU': 'Aspartik Asit (D)', 'GAC': 'Aspartik Asit (D)', 'GAA': 'Glutamik Asit (E)', 'GAG': 'Glutamik Asit (E)',
  'UGU': 'Sistein (C)', 'UGC': 'Sistein (C)', 'UGA': 'STOP', 'UGG': 'Triptofan (W)',
  'CGU': 'Arginin (R)', 'CGC': 'Arginin (R)', 'CGA': 'Arginin (R)', 'CGG': 'Arginin (R)',
  'AGU': 'Serin (S)', 'AGC': 'Serin (S)', 'AGA': 'Arginin (R)', 'AGG': 'Arginin (R)',
  'GGU': 'Glisin (G)', 'GGC': 'Glisin (G)', 'GGA': 'Glisin (G)', 'GGG': 'Glisin (G)'
};

function convertToRNA() {
  const dna = document.getElementById("dnaInput").value.toUpperCase();
  const rna = dna.replace(/T/g, "U");
  document.getElementById("result").innerText = `RNA Dizisi: ${rna}`;
}

function convertToAminoAcid() {
  const dna = document.getElementById("dnaInput").value.toUpperCase();
  const rna = dna.replace(/T/g, "U");
  let aminoAcids = '';
  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.substr(i, 3);
    aminoAcids += codonTable[codon] ? codonTable[codon] + " " : "";
  }
  document.getElementById("result").innerText = `Amino Asit Dizisi: ${aminoAcids.trim()}`;
}
