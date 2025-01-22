interface Idd {
    root:     string;
    suffixes?: string[];
}

export interface Country {
    name: String
    flag: String
    alt?: String
    idd:  Idd;
}


