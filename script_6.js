let sequence1 = "CCGUCGUUGCGCUACAGC";
let sequence2 = "CCUCGCCGGUACUUCUCG"; 

function which_codon(codon){
    switch(codon){
    case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC" :
        return "Sérine";
    case "CCU": case "CCC": case "CCA": case "CCG" :
        return "Proline";
    case "UUA": case "UUG": case "CUU": case "CUC": case "CUA": case "CUG" :
        return "Leucine";
    case "UUU": case "UUC" :
        return "Phénylalanine";
    case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG" :
        return "Arginine";
    case "UAU": case "UAC" :
        return "Tyrosine";
    }
}

function DNA(sequence){
    let codons_seq = sequence.match(/.{1,3}/g);
    console.log(codons_seq)
    let AA =[]
    for(count=0; count < codons_seq.length; count ++){
        AA[count] = which_codon(codons_seq[count])
    }
    return AA
}

console.log(`Voici la séquence de codons et d'acides aminés pour ${sequence1}`);
console.log(DNA(sequence1));

console.log(`Voici la séquence de codons et d'acides aminés pour ${sequence2}`);
console.log(DNA(sequence2));