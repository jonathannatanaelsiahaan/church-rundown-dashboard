class RundownModel {
    constructor(id, title, subtitle, showTime, endTime, organizerId) {
        this.id = id
        this.title = title
        this.subtitle = subtitle
        this.showTime = showTime
        this.endTime = endTime
        this.organizerId = organizerId
    }

    get id() {
        return this.id
    }

    get title() {
        return this.title
    }

    get subtitle() {
        return this.subtitle
    }

    get showTime() {
        return this.showTime
    }

    get endTime() {
        return this.endTime
    }

    get organizerId() {
        return this.organizerId
    }
}

export default RundownModel;