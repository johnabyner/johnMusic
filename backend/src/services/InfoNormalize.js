class InfoNormalize{
    filterManyProfiles(profiles){
        const manyProfilesFiltered = [];

        profiles.data.forEach(element => {
            manyProfilesFiltered.push({
                id: element.id,
                name: element.name,
                picture_medium: element.picture_medium
            });
        });

        return manyProfilesFiltered;
    }

    filterProfile(profile){
        const profileFiltered = {
            name: profile.name,
            picture_medium: profile.picture_medium
        };

        return profileFiltered;
    }

    filterDiscography(Discography){
        const discographyFiltered = {
            album: [],
            ep: [],
            single: []
        };

        Discography.data.forEach(element => {
            if(element.record_type === 'album'){
                discographyFiltered.album.push(element);
            }
            else if(element.record_type === 'ep'){
                discographyFiltered.ep.push(element);
            }else if(element.record_type === 'single'){
                discographyFiltered.single.push(element);
            }
        });

        return discographyFiltered;
    }
}

export default new InfoNormalize();