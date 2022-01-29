import { createSelector } from 'reselect';

const VisitProfileState = (state) => state.visitProfilePage;
export const getVisitedProfileContacts = createSelector(VisitProfileState, (state) => {
    const contacts = state?.data?.contacts
    if (!contacts) {
        return []
    }
    const detailed = []
    for (const datas in contacts) {
        if (contacts[datas] != null) {
            detailed.push(
                <h5>
                    {datas}: {contacts[datas]}
                </h5>
            )
        }
    }
    return detailed
}) 