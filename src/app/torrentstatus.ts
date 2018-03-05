/**
 * This enum is directly copied from the C++. It will be out of sync if the C++ is modified.
 */
export enum TorrentStatus {
    NOT_STARTED,
    SEEDING_COMPLETE,
    DOWNLOAD_COMPLETE,
    SEEDING,
    DOWNLOADING,
    STALLED,
    STOPPED,
    ALLOCATING_DISKSPACE,
    ERROR,
    QUEUED,
    CHECKING_DATA,
    NO_SPACE_LEFT,
    PAUSED,
    SUPERSEEDING,
    INVALID_STATUS
}
