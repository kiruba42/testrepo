export const AliasList: any[] = [{ label: 'Use Case Name', value: 1 }, { label: 'Physical Data Model Name(30 Chars)', value: 2 },
{ label: 'Physical Data Model Name(256 Chars)', value: 3 }, { label: 'COBOL Name(30 Chars)', value: 4 },
{ label: 'Product System Name(30 Chars)', value: 5 }, { label: 'Product Short Name(30 Chars)', value: 6 },
{ label: 'Object Model Name', value: 7 }, { label: 'Object Language(30 Chars-Java etc..)', value: 8 },
{ label: 'XML DTD Name', value: 9 }, { label: 'XML Long Name', value: 10 }, { label: 'Logical Name', value: 11 },
{ label: 'Pascal Case', value: 12 }, { label: 'Pascal Case Abbreviated', value: 13 }, { label: 'Title Case', value: 14 }];

export const SearchType:any[]=[{label:'Logical Token',value:'logical'},{label:'Physical Token',value:'physical'}];
export const equivalentdata:any[]=[{value:1,example:'XXXXX XXXX XXXX',explain:'(All Upper Case)'},{value:2,example:'XXXXX_XX_XXXX',explain:'(Abbreviated Name Undersscores Between Words(30 Chars))'},
                                    {value:3,example:'XXXXX_XX_XXX_XXXX',explain:'(Abbreviated Name Undersscores Between Words(256 Chars))'},
                                    {value:4,example:'XXXXX-XX-XXX-XXXX',explain:'(Abbreviated Name Hyphens Between Words(30 Chars))'},
                                    {value:5,example:'XXXXX_XXXXX_XXXXXX-XXXX',explain:'(Abbreviated Name Undersscores Between Words(30 Chars))'},
                                    {value:6,example:'Xxxx Xxx Xxxxx Xxxx',explain:'(Abbreviated Name Spaces Between Words(30 Chars))'},
                                    {value:7,example:'xxxXxxxXxxXxxxx',explain:'(Camel Case)'},{value:8,example:'xxxXxxXxxXxxxx',explain:'(Camel Case Abbreviated)'},
                                    {value:9,example:'<xxxXxxxXxx>',explain:'(XML Camel Case Abbreviated)'},
                                    {value:10,example:'<xxxXxxxXxx>',explain:'(XML Camel Case )'},
                                    {value:11,example:'Xxxxx Xxxx Xxx>',explain:'(Physical Name to Spelled out Logical Name with Capitalized First Letter and Space Between Words)'},
                                    {value:12,example:'XxxxxXxxxXxx',explain:'(Pascal Case - a.k.a Upper Camel Case )'},
                                    {value:13,example:'XxxxxXxxxXxx',explain:'(Pascal Case - a.k.a Upper Camel Case Abbreviated )'},
                                    {value:14,example:'Xxxxx Xxxx Xxx',explain:'(Title Case )'},]