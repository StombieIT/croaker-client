import { FC } from "react"
import classNames from "classnames"
import Skeleton from "react-loading-skeleton"
import { SkeletonAvatar } from "../Avatar/SkeletonAvatar"
import { MediaGrid } from "../MediaGrid/MediaGrid"

import classes from "./Croak.module.scss"

enum SkeletonCroakUnit {
    AVATAR_SIZE = 47,
    NAME_WIDTH = 90,
    USERNAME_WIDTH = 60,
    PASSED_TIME_WIDTH = 30,
    TEXT_ROWS_COUNT = 3,
    TEXT_HEIGHT = 10,
    IMAGE_HEIGHT = 40,
    REACTION_WIDTH = 30,
    REACTION_HEIGHT = 15
}

export const SkeletonCroak: FC = () => {
    return <div className={ classNames(classes.skeleton, classes.container) }>
        <SkeletonAvatar
            size={ SkeletonCroakUnit.AVATAR_SIZE }
            className={ classes.avatarWrapper }
        />
        <div className={ classes.content }>
            <div className={ classes.header }>
                <Skeleton width={ SkeletonCroakUnit.NAME_WIDTH } />
                <Skeleton width={ SkeletonCroakUnit.USERNAME_WIDTH } />
                <Skeleton width={ SkeletonCroakUnit.PASSED_TIME_WIDTH } />
            </div>
            <div className={ classes.text }>
                <Skeleton
                    count={ SkeletonCroakUnit.TEXT_ROWS_COUNT }
                    height={ SkeletonCroakUnit.TEXT_HEIGHT }
                />
            </div>
            <MediaGrid>
                <Skeleton height={ SkeletonCroakUnit.IMAGE_HEIGHT } />
                <Skeleton height={ SkeletonCroakUnit.IMAGE_HEIGHT } />
                <Skeleton height={ SkeletonCroakUnit.IMAGE_HEIGHT } />
            </MediaGrid>
            <div className={ classes.reactionsBar }>
                <Skeleton
                    width={ SkeletonCroakUnit.REACTION_WIDTH }
                    height={ SkeletonCroakUnit.REACTION_HEIGHT }
                />
                <Skeleton
                    width={ SkeletonCroakUnit.REACTION_WIDTH }
                    height={ SkeletonCroakUnit.REACTION_HEIGHT }
                />
                <Skeleton
                    width={ SkeletonCroakUnit.REACTION_WIDTH }
                    height={ SkeletonCroakUnit.REACTION_HEIGHT }
                />
            </div>
        </div>
    </div>
}