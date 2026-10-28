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

    filterDiscographyHead(discographyData) {
        const discographyHeadFiltered = {
            id: discographyData.id,
            title: discographyData.title,
            cover_big: discographyData.cover_big,
            release_date: discographyData.release_date,
            record_type: discographyData.record_type,
            nb_tracks: discographyData.nb_tracks,
            artist: {
                id: discographyData.artist.id,
                name: discographyData.artist.name,
                picture_medium: discographyData.artist.picture_medium
            }
        };

        return discographyHeadFiltered;
    }

    filterDiscographyBody(discographyData) {
        const musicListFiltered = [];

        discographyData.tracks.data.forEach(element => {
            musicListFiltered.push({
                id: element.id,
                title: element.title,
                duration: element.duration,
                track_position: element.track_position,
                explicit_lyrics: element.explicit_lyrics,
            });
        });

        return musicListFiltered;
    }
}

export default new InfoNormalize();