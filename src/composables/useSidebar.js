export default (sidebars) => {
    const getSideBarKeySlot = key => `sidebar-key-${key}`

    const getSidebar = (key) => sidebars.find(sidebar => getSideBarKeySlot(sidebar.key) === getSideBarKeySlot(key))

    const getScopedSideBars = (slots) => {
        const data = {}
        slots.forEach(slot => {
            data[slot] = sidebars.find(sidebar => getSideBarKeySlot(sidebar.key) === slot)
        })
        return data
    }

    return {
        getSideBarKeySlot,
        getSidebar,
        getScopedSideBars
    }
}
