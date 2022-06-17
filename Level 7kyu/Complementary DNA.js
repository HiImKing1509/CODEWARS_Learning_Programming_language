function DNAStrand(dna)
{
    var arrDNA = dna.split("");
    var str = "";
    arrDNA.forEach(element =>
    {
        if (element === "A")
            str += "T";
        else if (element === "T")
            str += "A";
        else if (element === "G")
            str += "C";
        else
            str += "G";
    });
    return str;
}
