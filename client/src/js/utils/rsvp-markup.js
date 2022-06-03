export const initFormMarkup = `
<div class="form__separation-wrap">
    <div class="form__element">
        <input type="text" name="name" placeholder="Your name(s)" required>
    </div>
    <div class="form__element">
        <input type="email" name="email" placeholder="Email address" required>
    </div>
</div>

<div class="form__separation-wrap">
    <div class="form__element">
        <p>Will you be attending the wedding?</p>
        <div class="rsvp-form__checkers">
            <div class="rsvp-form__checker">
                <input id="rsvp-attend-accept" type="radio" name="attend" value="accept" class="rsvp-form__radio" required>
                <label for="rsvp-attend-accept">Joyfully accept</label>
            </div>
            <div class="rsvp-form__checker">
                <input id="rsvp-attend-decline" type="radio" name="attend" value="decline" class="rsvp-form__radio" required>
                <label for="rsvp-attend-decline">Regretfully decline</label>
            </div>        
        </div>
    </div>
</div>

<div class="form__separation-wrap">
    <div class="form__element">
        <p>Will you be spending the night at Ashley Park House?</p>
        <div class="rsvp-form__checkers">
            <div class="rsvp-form__checker">
                <input id="rsvp-accommodation-yes" type="radio" name="accommodation" value="yes" class="rsvp-form__radio" required>
                <label for="rsvp-accommodation-yes">Yes</label>
            </div>
            <div class="rsvp-form__checker">
                <input id="rsvp-accommodation-no" type="radio" name="accommodation" value="no" class="rsvp-form__radio" required>
                <label for="rsvp-accommodation-no">No</label>
            </div>        
        </div>
    </div>
</div>

<div class="form__separation-wrap">
    <div class="form__element">
        <h5>Any other comments</h5>
        <textarea name="comments" rows="3" placeholder="Your message (optional)"></textarea>
    </div>
</div>
`;
