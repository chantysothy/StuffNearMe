let mockRegion = { longitude: -82.2, latitude: 28.0, longitudeDelta: 0.01, latitudeDelta: 0.01 };

let stuffNearMeData = {
    events: [
        { title: 'Get Rawked by Taunk', extra: 'Fresh music from Taunk the Rawk', type: 'performer', region: mockRegion, cover: 2.69 },
        { title: 'The beef within', extra: 'If you can finish a 9 oz steak in 3 minutes we let 3 of your friends drink for free', type: 'promotion', region: mockRegion, cover: 10.00 },
        { title: 'Orchard of Doom', extra: 'Sample Beers half price!', type: 'discount', region: mockRegion, cover: 12.00 },
        { title: 'Paddy\'s Irish pub', extra: 'Drink here, be merry', type: 'ad', region: mockRegion, cover: 0 },
        { title: 'World\'s End', extra: 'Have a pint and wait for this whole thing to blow over', type: 'ad', region: mockRegion, cover: 20 },
        { title: 'Nerdophile', extra: 'Dress up in your favority cosplay character and get shlammered', type: 'ad', region: mockRegion, cover: 4 },
        { title: 'Where has all the rum gone?', extra: 'Drink here, be merry', type: 'ad', region: mockRegion, cover: 30 }
    ]
};


module.exports = stuffNearMeData;
