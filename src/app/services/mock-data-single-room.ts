export interface ServicesOffered {
    serviceId: number;
    isServiceAvailable: boolean;
    serviceName: string;
}

export interface singleRoomDataInterface {
    singleRoomServices: ServicesOffered[];
    singleRoomData : string;
}



export const SingleRoomData: singleRoomDataInterface = {
    singleRoomData: "Single Rooms feature stylish decor and a contemporary, renovated bathroom.All rooms offer 32” LCD TV's with Fox Sports & pay - per - view movies."+ 
    "Selected rooms have balconies with stunning views over the city or parklands.For your convenience, Single Rooms feature coffee & tea "+
    "making facilities, fully - stocked mini bar, refrigerator, hairdryer, iron & ironing board, Wi - Fi Internet access, anddirect dial phones.",
    singleRoomServices: [ 
    { serviceId: 1, isServiceAvailable: true, serviceName: 'DOUBLE BED' },
    { serviceId: 2, isServiceAvailable: true, serviceName: '80 SQ MT' },
    { serviceId: 3, isServiceAvailable: false, serviceName: '3 PERSONS' },
    { serviceId: 4, isServiceAvailable: true, serviceName: 'FREE INTERNET' },
    { serviceId: 5, isServiceAvailable: true, serviceName: 'FREE WI-FI' },
    { serviceId: 6, isServiceAvailable: true, serviceName: 'BREAKFAST INCLUDED' },
    { serviceId: 7, isServiceAvailable: true, serviceName: 'PRIVATE BALCONY' },
    { serviceId: 8, isServiceAvailable: false, serviceName: 'FREE NEWSPAPER' },
    { serviceId: 9, isServiceAvailable: false, serviceName: 'FLAT SCREEN TV' },
    { serviceId: 10, isServiceAvailable: true, serviceName: 'FULL AC' },
    { serviceId: 11, isServiceAvailable: false, serviceName: 'BEACH VIEW' },
    { serviceId: 12, isServiceAvailable: true, serviceName: 'ROOM SERVICE' },
]
}